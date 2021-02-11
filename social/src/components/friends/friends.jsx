import React from 'react';

import s from './friends.module.css';

const Friends = ({friends}) => {

   const friendsElements = friends.map(({name, img, id, isFriend}) => {
      // eslint-disable-next-line array-callback-return
      if (!isFriend) return;

      let image;

      if (img) {
         image = <img src={img} className={s.friends__foto} alt='avatar'/>;
      } else {
         image = <div className={s.friends__foto}/>;
      }

      return (
         <li key={id} className={s.friend__row}>
            {image}
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

export default Friends;