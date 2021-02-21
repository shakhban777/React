import React from 'react';

import s from './add-message.module.css';
import {addMessageActionCreator, updateNewMessageTextCreator} from "../../../redux/state";

const AddMessage = ({newMessageText, dispatch}) => {

   const newMessageElement = React.createRef();

   const sendMessage = () => {
      dispatch(addMessageActionCreator());
   }

   const onMessageChange = () => {
      const text = newMessageElement.current.value;
      dispatch(updateNewMessageTextCreator(text));
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