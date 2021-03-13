import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import Results from "../result/results";
import Search from "../search/search";
import * as axios from "axios";
import './app.scss';

export default class App extends Component {
   state = {
      api: {
         searching: 'Darya',
         maxResults: 10,
         orderBy: 'date',
         baseURL: 'https://youtube.googleapis.com/youtube/v3/search?',
         apiKey: 'AIzaSyAu6v0szd3Lohk-b-di7cN6Npt6bUafAMo'
      },
      items: []
   };

   componentDidMount() {
      const {baseURL, maxResults, apiKey, orderBy, searching} = this.state.api;
      // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=date&q=kizlyar&key=[YOUR_API_KEY]
      axios
         .get(`${baseURL}part=snippet&maxResults=${maxResults}&order=${orderBy}&q=${searching}&key=${apiKey}`)
         .then(response => {
            const newItems =
               response.data.items.map(item => {
                  return {
                     id: item.etag,
                     videoId: item.id.videoId,
                     date: item.snippet.publishTime,
                     image: item.snippet.thumbnails.high.url,
                     videoName: item.snippet.title,
                     author: item.snippet.channelTitle,
                  };
               })

            this.setState(({items}) => {
               return {
                  items: [...newItems]
               }
            })
         })
   }

   onSearch = (e) => {
      e.preventDefault();
      const text = e.currentTarget;    //fake

      this.setState(({api}) => {
         return {
            api: {...api, searching: text}
         }
      });
   }

   render() {
      const {items, api} = this.state;

      return (
         <div className='container app'>
            <Jumbotron>
               <Search onSearch={this.onSearch}/>
               <Results items={items} searching={api.searching}/>
            </Jumbotron>
         </div>
      );
   }
};