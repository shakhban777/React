import React from 'react';

import s from './add-message.module.css';

const AddMessage = () => {
   return (
      <div className={s.addMessage}>
         <textarea className={s.textArea}/>
         <button className={s.sendButton}>Send message</button>
      </div>
   );
};

export default AddMessage;