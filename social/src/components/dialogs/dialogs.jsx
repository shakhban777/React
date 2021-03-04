import React from 'react';
import DialogItem from "./dialog-item/dialog-item";
import Message from "./message/message";

import s from './dialogs.module.css';

const newMessageElement = React.createRef();

const Dialogs = (props) => {
   const dialogsElements = props.users
      .map(dialog => {
         const {id, ...props} = dialog;
         return <DialogItem key={id} id={id} {...props} />;
      });

   const messagesElements = props.state.messages
      .map(message => {
         const {id, ...props} = message;
         return <Message key={id} {...props} />;
      });

   const onSendMessage = () => {
      props.sendMessage();
   }

   const onMessageChange = (e) => {
      const text = e.target.value;
      props.updateMessage(text);
   }

   return (
      <div className={s.dialogs}>
         <ul className={s.dialogsItems}>
            {dialogsElements}
         </ul>

         <div className={s.messages}>
            <ul className={s.messagesList}>
               {messagesElements}
            </ul>
            <div className={s.addMessage}>
            <textarea
               placeholder='Enter your message'
               className={s.textArea}
               ref={newMessageElement}
               value={props.state.newMessageText}
               onChange={onMessageChange}/>
                  <button
                     className={s.sendButton}
                     onClick={onSendMessage}>
                     Send message
                  </button>
               </div>
         </div>

      </div>
   );
};

export default Dialogs;
