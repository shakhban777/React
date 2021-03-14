import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import Results from "../result/results";
import Search from "../search/search";
import './app.scss';

export default class App extends Component {
   state = {
      value: '',
      search: '',
      api: {
         maxResults: 10,
         orderBy: 'date',
         baseURL: 'https://youtube.googleapis.com/youtube/v3/search?',
         apiKey: 'AIzaSyAZ9HXwcvjwkjV3mUA6z4JHlU-ASd1uy2g'
      },
      items: []
   };

   componentDidMount() {
      this.updateItems();
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevState.search !== this.state.search) {
         this.updateItems();
      }
   }

   updateItems() {
      const {baseURL, maxResults, apiKey, orderBy} = this.state.api;
      const {search} = this.state;

      (async () => {
         try {
            const response = await fetch(`${baseURL}part=snippet&maxResults=${maxResults}&order=${orderBy}&q=${search}&key=${apiKey}`);
            const data = await response.json();
            //add items
            const newItems =
               await data.items.map(item => {
                  return {
                     id: item.etag,
                     videoId: item.id.videoId,
                     date: item.snippet.publishTime,
                     videoName: item.snippet.title,
                     author: item.snippet.channelTitle,
                     // url:
                  };
               });
            await this.setState({items: [...newItems]});

            // add field views
            await newItems.forEach(item => {
               fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${item.videoId}&key=${this.state.api.apiKey}`)
                  .then(response => response.json())
                  .then(data => data.items[0].statistics.viewCount)
                  .then(view => {
                     const itemWithView = {...item, views: view};
                     const oldItems = [...this.state.items];
                     const idx = oldItems.findIndex(el => el.id === item.id)

                     const newItems = [...oldItems.slice(0, idx), itemWithView, ...oldItems.slice(idx + 1)];

                     //sorting items
                     const sortedItems = newItems.sort(function (a, b) {
                        return b.views - a.views;
                     })

                     this.setState({items: sortedItems})
                  })
                  .catch(err => {
                     if (err instanceof TypeError) {
                        console.log('Отсутствует данные "statistics", видео еще не обработано сервером');
                     }
                  })
            })
         } catch (err) {
            console.err(err);
         }
      })()
   }

   onChange = (e) => {
      this.setState({value: e.target.value});
   }

   onSubmit = (e) => {
      e.preventDefault();
      if (!this.state.value) return
      this.setState({search: this.state.value});
      this.setState({value: ''});
   }

   render() {
      const {items, value, search} = this.state;
      const toRender = search
         ? (<Jumbotron>
               <Search value={value} onChange={this.onChange} onSubmit={this.onSubmit}/>
               <Results items={items} search={search}/>
            </Jumbotron>)
         : (<Jumbotron>
               <Search value={value} onChange={this.onChange} onSubmit={this.onSubmit}/>
            </Jumbotron>)

      return (
         <div className='container app'>
            {toRender}
         </div>
      );

   }
};