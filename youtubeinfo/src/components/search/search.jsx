import React from "react";
import { Button, Form } from 'react-bootstrap';

const Search = ({ onSearch }) => {
   return (
      <Form className='mb-5'
            onSubmit={() => onSearch}>
         <Form.Group controlId="formBasicEmail">
            <Form.Label>Поиск видео</Form.Label>
            <Form.Control type="text" placeholder="Введите название" />
         </Form.Group>
         <Button variant="primary" type="submit">
            Поиск
         </Button>
      </Form>
   );
};

export default Search;