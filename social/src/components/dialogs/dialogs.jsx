import React from 'react';

import s from './dialogs.module.css';

const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <ul className={s.dialogsItems}>
            <li className={s.dialog + ' ' + s.active}>Shakhban</li>
            <li className={s.dialog}>Shakhru</li>
            <li className={s.dialog}>Hasan</li>
            <li className={s.dialog}>My Kitty</li>
            <li className={s.dialog}>My Honey</li>
         </ul>
         <ul className={s.messages}>
            <li className={s.message}>Hello, how are you?</li>
            <li className={s.message}>I'm fine, thanks!</li>
            <li className={s.message}>What are you doing tonight?</li>
         </ul>
      </div>
   );
};

export default Dialogs;
