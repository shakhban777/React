import React from 'react';
import DialogItem from "./dialog-item/dialog-item";
import Message from "./message/message";

import s from './dialogs.module.css';

const Dialogs = ({dialogs, messages}) => {

   const dialogsElements = dialogs
      .map(dialog => {
         const {id, ...props} = dialog;
         return <DialogItem key={id} id={id} {...props} />;
      });

   const messagesElements = messages
      .map(message => {
         const {id, ...props} = message;
         return <Message key={id} {...props} />;
      });

   return (
      <div className={s.dialogs}>
         <ul className={s.dialogsItems}>
            {dialogsElements}
         </ul>
         <ul className={s.messages}>
            {messagesElements}
         </ul>
      </div>
   );
};

export default Dialogs;
