import React from 'react';

import s from './message.module.css';

const Message = ({id, message, incoming}) => {

   const messageType = (clazz) => {
      return (
         <li key={id} className={clazz}>
            {message}
         </li>
      )
   };

   if (incoming) {
      return (
         messageType(s.incoming)
      );
   } else {
      return (
         messageType(s.message)
      );
   }
};

export default Message;