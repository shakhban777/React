import React, {Component} from "react";
import {Card} from "react-bootstrap";
import * as axios from "axios";

export default class Result extends Component {
   state = {
      results: [],
      searching: '',
      image: '',
      videoName: '',
      author: '',
      date: ''
   };

   onRequire = () => {
      axios
         .get(this.props.requireURL)
         .then(response => this.setState(({results}) => {
            return {
               results: response.items
            };
         }));
   }

   render() {
      const {searching, image, videoName, author, date} = this.state;

      return (
         <div className='result'>
            <p>Результат поиска по запросу: "{searching}"</p>
            <Card style={{ width: '15rem' }}>
               <Card.Img variant="top" src={image} />
               <Card.Body>
                  <Card.Title>{videoName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
               </Card.Body>
            </Card>
         </div>
      );
   }
}