import React from 'react';

import s from './add-message.module.css';

const AddMessage = ({addMessage, newMessageText, updateNewMessageText}) => {

   const newMessageElement = React.createRef();

   const sendMessage = () => {
      addMessage();
   }

   const onMessageChange = () => {
      const text = newMessageElement.current.value;
      updateNewMessageText(text);
   }

   return (
      <div className={s.addMessage}>
         <textarea
            className={s.textArea}
            ref={newMessageElement}
            value={newMessageText}
            onChange={onMessageChange}/>
         <button
            className={s.sendButton}
            onClick={sendMessage}>
            Send message
         </button>
      </div>
   );
};

export default AddMessage;