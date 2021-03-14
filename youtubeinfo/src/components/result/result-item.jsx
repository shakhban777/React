import React from "react";
import {Accordion, Card} from "react-bootstrap";
import './result.scss';

const ResultItem = ({videoName, author, date, views, videoId}) => {
   const parsedDate = date.toString();
   const neededDate = new Date(parsedDate).toLocaleString("ru", {
      day: 'numeric',
      year: 'numeric',
      month: 'long',
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
   });
   const videoUrl = `https://www.youtube.com/embed/${videoId}`

   return (
      <li className='list-group-item'>
         <Accordion defaultActiveKey="1">
            <Card>
               <Accordion.Toggle as={Card.Header} eventKey="0">
                  <Card.Body className='description'>
                     <Card.Title>{videoName}</Card.Title>
                     <Card.Subtitle className="mb-3">Автор: <span className='text-muted'>{author}</span></Card.Subtitle>
                     <Card.Subtitle className="mb-3">Загружено: <span className='text-muted'>{neededDate}</span></Card.Subtitle>
                     <Card.Subtitle className="mb-3">Просмотров: <span className='text-muted'>{views}</span></Card.Subtitle>
                  </Card.Body>
               </Accordion.Toggle>
               <Accordion.Collapse eventKey="0" className='accord'>
                  <iframe title={videoId} width="720" height="480" src={videoUrl} frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen>
                  </iframe>
               </Accordion.Collapse>
            </Card>
         </Accordion>
      </li>
   );
}
export default ResultItem;