import React from 'react';

import s from './message.module.css';

const Message = ({id, message}) => {
   return (
      <li key={id} className={s.message}>{message}</li>
   );
};

export default Message;