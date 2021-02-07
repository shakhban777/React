import React from 'react';
import DialogItem from "./dialog-item/dialog-item";
import Message from "./message/message";

import s from './dialogs.module.css';

const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <ul className={s.dialogsItems}>
            <DialogItem id='1' name='Shakhban'/>
            <DialogItem id='2' name='Shakhru'/>
            <DialogItem id='3' name='Kitty'/>
            <DialogItem id='4' name='Freeman'/>
            <DialogItem id='5' name='Bel'/>

         </ul>
         <ul className={s.messages}>
            <Message message="Hello, how are you?"/>
            <Message message="I'm fine, thanks!"/>
            <Message message="What are you doing tonight?"/>
         </ul>
      </div>
   );
};

export default Dialogs;
