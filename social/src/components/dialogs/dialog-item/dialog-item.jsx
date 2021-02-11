import React from 'react';
import {NavLink} from "react-router-dom";

import s from './dialog-item.module.css';

const DialogItem = ({ id, name, img }) => {
   let path = `${id}`;

   let image;

   if (img) {
      image = <img src={img} className={s.friends__foto} alt='avatar'/>;
   } else {
      image = <div className={s.friends__foto}/>;
   }

   return (
   <li className={s.dialog}>
      {image}
      <NavLink activeClassName={s.active} to={path}>{name}</NavLink>
   </li>
   );
};

export default DialogItem;