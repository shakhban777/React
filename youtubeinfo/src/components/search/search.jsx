import React from "react";
import {Button, Form} from 'react-bootstrap';

const Search = ({onChange, onSubmit, value}) => {
   return (
      <Form className='mb-5' onSubmit={onSubmit}>
         <Form.Group controlId="formBasicEmail">
            <Form.Label>Поиск видео</Form.Label>
            <Form.Control type="text" placeholder="Введите название" onChange={onChange} value={value}/>
         </Form.Group>
         <Button variant="primary" type="submit">
            Поиск
         </Button>
      </Form>
   );
};

export default Search;