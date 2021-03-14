import React from "react";
import { Card } from "react-bootstrap";

const ResultItem = ({ image, videoName, author, date, views }) => {
   const parsedDate = date.toString();
   const neededDate = new Date(parsedDate).toLocaleString("ru", {day: 'numeric', year: 'numeric', month: 'long', hour: "numeric", minute: "numeric", second: "numeric"});

   return (
      <li className='list-group-item'>
         <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
               <Card.Title>{videoName}</Card.Title>
               <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
               <Card.Subtitle className="mb-2 text-muted">{neededDate}</Card.Subtitle>
               <Card.Subtitle className="mb-2 text-muted">{views}</Card.Subtitle>
            </Card.Body>
         </Card>
      </li>
   );
}
export default ResultItem;