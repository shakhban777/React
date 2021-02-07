import React from 'react';

import s from './message.module.css';

const Message = ({message}) => {
   return (
      <div>
         <li className={s.message}>{message}</li>
      </div>
   );
};

export default Message;