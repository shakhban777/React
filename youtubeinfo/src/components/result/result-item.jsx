import React from "react";
import { Card } from "react-bootstrap";

const ResultItem = ({ image, videoName, author, date }) => {

   return (
      <li className='list-group-item'>
         <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
               <Card.Title>{videoName}</Card.Title>
               <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
               <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
            </Card.Body>
         </Card>
      </li>
   );
}
export default ResultItem;