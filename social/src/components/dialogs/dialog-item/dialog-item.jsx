import React from 'react';
import {NavLink} from "react-router-dom";

import s from './dialog-item.module.css';


const DialogItem = ({ id, name }) => {
   let path = `${id}`;

   return (
      <li className={s.dialog}>
         <NavLink activeClassName={s.active} to={path}>{name}</NavLink>
      </li>
   );
};

export default DialogItem;