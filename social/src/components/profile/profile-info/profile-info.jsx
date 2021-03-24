import React from 'react';
import s from './profile-info.module.css';
import Preloader from "../../common/preloader";

const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader/>
   }
   return (
      <div className={s.card}>
         <img className={s.avatar} src={props.profile.photos.large} alt="avatar"/>
         <ul className={s.list}>
            <li>Имя: {props.profile.fullName}</li>
            <li>{props.profile.aboutMe
               ? `Обо мне: ${props.profile.aboutMe}`
               : null
            }</li>
            <li>Положение:
               {props.profile.lookingForAJob
               ? ' в поиске работы🧐'
               : ' не ищу работу😎'}
            </li>
            <li>Описание работы: {props.profile.lookingForAJobDescription}</li>
         </ul>
      </div>
   );
};

export default ProfileInfo;