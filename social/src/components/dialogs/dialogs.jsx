import React from 'react';
import DialogItem from "./dialog-item/dialog-item";
import Message from "./message/message";

import s from './dialogs.module.css';

const dialogs = [
   {id: 1, name: 'Shakhban'},
   {id: 2, name: 'Shakhru'},
   {id: 3, name: 'Kitty'},
   {id: 4, name: 'Freeman'},
   {id: 5, name: 'Bel'}
];

const messages = [
   {id: 1, message: "Hello, how are you?"},
   {id: 2, message: "I'm fine, thanks!"},
   {id: 3, message: "What are you doing tonight?"}
];

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

const Dialogs = () => {
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
