import React from 'react';

import s from './friends.module.css';

const Friends = (props) => {
   const friendsElements = props.state.map(({fullName, userPhotoUrl, id, followed}) => {
      // eslint-disable-next-line array-callback-return
      if (!followed) return;

      let image = <img src={userPhotoUrl} className={s.friends__foto} alt='avatar'/>;

      return (
         <li key={id} className={s.friend__row}>
            {image}
				<p className={s.friends__name}>{fullName}</p>
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