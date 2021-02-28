import React from 'react';
import DialogItem from "./dialog-item/dialog-item";
import Message from "./message/message";
import AddMessageContainer from "./add-message/add-message-container";

import s from './dialogs.module.css';

const Dialogs = (props) => {
   const state = props.store.getState();

   const dialogsElements = state.sidebar.users
      .map(dialog => {
         const {id, ...props} = dialog;
         return <DialogItem key={id} id={id} {...props} />;
      });

   const messagesElements = state.dialogsPage.messages
      .map(message => {
         const {id, ...props} = message;
         return <Message key={id} {...props} />;
      });

   return (
      <div className={s.dialogs}>
         <ul className={s.dialogsItems}>
            {dialogsElements}
         </ul>

         <div className={s.messages}>
            <ul className={s.messagesList}>
               {messagesElements}
            </ul>
            <AddMessageContainer store={props.store}/>
         </div>

      </div>
   );
};

export default Dialogs;
