import React from 'react';
import s from './add-message.module.css';

const AddMessage = ({newMessageText, updateMessage, sendMessage}) => {
   const newMessageElement = React.createRef();

   const onSendMessage = () => {
      sendMessage();
   }

   const onMessageChange = (e) => {
      const text = e.target.value;
      updateMessage(text);
   }

   return (
      <div className={s.addMessage}>
         <textarea
            placeholder='Enter your message'
            className={s.textArea}
            ref={newMessageElement}
            value={newMessageText}
            onChange={onMessageChange}/>
         <button
            className={s.sendButton}
            onClick={onSendMessage}>
            Send message
         </button>
      </div>
   );
};

export default AddMessage;