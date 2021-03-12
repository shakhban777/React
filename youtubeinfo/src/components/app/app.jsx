import React, {Component} from "react";
import {Button, Jumbotron, Form} from 'react-bootstrap';
import './app.scss';
import Result from "../result/result";

export default class App extends Component {
   state = {
      baseURL: 'https://youtube.googleapis.com/youtube/v3/search?',
      searching: 'shakhban',
      apiKey: 'AIzaSyDLjNPbLM1TSxhjJqqKZ0N1jrRQxbzqQ-4',
      maxResults: 10,
      orderBy: 'viewCount',
      requireURL:`${this.baseURL}part=snippet&maxResults=${this.maxResults}&order=${this.orderBy}&q=${this.searching}&key=${this.apiKey}`
   };

   onSearch = (e) => {
      e.preventDefault();
      console.log(e);
   }

   render() {
      return (
         <div className='app'>
            <Jumbotron>
               <Form className='mb-5'
                     onSubmit={this.onSearch}>
                  <Form.Group controlId="formBasicEmail">
                     <Form.Label>Поиск видео</Form.Label>
                     <Form.Control type="text" placeholder="Введите название"/>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                     Поиск
                  </Button>
               </Form>
               <Result state={this.state}/>
            </Jumbotron>
         </div>
      );
   }
}