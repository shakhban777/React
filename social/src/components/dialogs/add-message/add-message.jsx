import React from 'react';

import s from './add-message.module.css';
import {addMessageActionCreator, updateNewMessageTextCreator} from "../../../redux/dialogs-reducer";

const AddMessage = ({newMessageText, dispatch}) => {

   const newMessageElement = React.createRef();

   const onSendMessage = () => {
      dispatch(addMessageActionCreator());
   }

   const onMessageChange = (e) => {
      const text = e.target.value;
      dispatch(updateNewMessageTextCreator(text));
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