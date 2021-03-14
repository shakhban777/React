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
         apiKey: 'AIzaSyBBO18VaIC9N3aPIGhMqZxLVtCRgK-2Jak'
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
         const response = await fetch(`${baseURL}part=snippet&maxResults=${maxResults}&order=${orderBy}&q=${search}&key=${apiKey}`);
         const data = await response.json();

         //add items
         const newItems =
            await data.items.map(item => {
               return {
                  id: item.etag,
                  videoId: item.id.videoId,
                  date: item.snippet.publishTime,
                  image: item.snippet.thumbnails.high.url,
                  videoName: item.snippet.title,
                  author: item.snippet.channelTitle,
               };
            });
         await this.setState({items: [...newItems]});

         // add field views
         await newItems.forEach(item => {
            fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${item.videoId}&key=${this.state.api.apiKey}`)
               .then(response => response.json())
               .then(data => data.items[0].statistics.viewCount)
               .then(view => {
                  debugger
                  const itemWithView = {...item, views: view};
                  const oldItems = [...this.state.items];
                  const idx = oldItems.findIndex(el => el.id === item.id)

                  const newItems = [...oldItems.slice(0, idx), itemWithView, ...oldItems.slice(idx + 1)];

                  this.setState( {items: newItems})
               })
         })
      })()
   }

   onChange = (e) => {
      this.setState({value: e.target.value});
   }

   onSubmit = (e) => {
      e.preventDefault();
      this.setState({search: this.state.value})
   }

   render() {
      const {items, value, search} = this.state;

      return (
         <div className='container app'>
            <Jumbotron>
               <Search value={value} onChange={this.onChange} onSubmit={this.onSubmit}/>
               <Results items={items} search={search}/>
            </Jumbotron>
         </div>
      );
   }
};