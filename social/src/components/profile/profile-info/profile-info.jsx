import React from 'react';

import s from './profile-info.module.css';

const ProfileInfo = () => {
   return (
      <div className={s.card}>
         <img className={s.avatar} src="https://econet.ru/uploads/pictures/456173/content_199820.jpg" alt="avatar"/>
         <ul className={s.list}>
            <li>Name: Shakhban</li>
            <li>Age: 27</li>
            <li>City: Kazan</li>
         </ul>
      </div>
   );
};

export default ProfileInfo;