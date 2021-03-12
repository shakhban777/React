import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import Results from "../result/results";
import Search from "../search/search";
import * as axios from "axios";
import './app.scss';

export default class App extends Component {
   state = {
      api: {
         searching: 'shakhban',
         maxResults: 10,
         orderBy: 'viewCount',
         baseURL: 'https://youtube.googleapis.com/youtube/v3/search?',
         apiKey: 'AIzaSyDLjNPbLM1TSxhjJqqKZ0N1jrRQxbzqQ-4',
         requireURL: `${this.baseURL}part=snippet&maxResults=${this.maxResults}&order=${this.orderBy}&q=${this.searching}&key=${this.apiKey}`
      },
      items: [
         {id: '1', image: '', videoName: 'hello', author: 'me', date: '12.02.02'},
         {id: '2', image: '', videoName: "It's me", author: 'you', date: '14.03.12'},
         {id: '3', image: '', videoName: 'And you', author: 'they', date: '1.09.21'}
      ]
   };

   componentDidMount() {

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