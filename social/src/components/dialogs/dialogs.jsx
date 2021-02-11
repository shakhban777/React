import React from 'react';
import DialogItem from "./dialog-item/dialog-item";
import Message from "./message/message";

import s from './dialogs.module.css';
import AddMessage from "./add-message/add-message";

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

         <div className={s.messages}>
            <ul className={s.messagesList}>
               {messagesElements}
            </ul>
            <AddMessage/>
         </div>

      </div>
   );
};

export default Dialogs;
