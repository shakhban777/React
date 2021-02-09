import React from 'react';

import s from './navbar-friends.module.css';

const NavbarFriends = ({friends}) => {
   const friendsElements = friends.map(({name, img}) => {
      return (
         <li key={img} className={s.friend__row}>
				<img src={img} className={s.friends__foto} alt='avatar'/>
				<p className={s.friends__name}>{name}</p>
         </li>
      );
   });

   return (
      <div className={s.friends}>
         <p className={s.friends__title}>Friends</p>
         <ul className={s.friends__row}>
				{friendsElements}
         </ul>
      </div>
   );
};

export default NavbarFriends;