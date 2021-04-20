import React from 'react';
import s from './profile-info.module.css';
import Preloader from "../../common/preloader";
import defaultPhoto from '../../../assets/images/user.png';
import ProfileStatus from "./profile-status";

const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader/>
   }

   const avatar = props.profile.photos.large
      ? props.profile.photos.large
      : defaultPhoto;

   return (
      <div className={s.card}>
         <img className={s.avatar} src={avatar} alt="avatar"/>
         <ul className={s.list}>
            <li>
               <ProfileStatus status={'Hello my friends!'}/>
            </li>
            <li>Имя: {props.profile.fullName}</li>
            <li>
               {props.profile.aboutMe
               ? `Обо мне: ${props.profile.aboutMe}`
               : null}
            </li>
            <li>Положение:
               {props.profile.lookingForAJob
                  ? ' в поиске работы🧐'
                  : ' не ищу работу😎'}
            </li>
            <li>
               {props.profile.lookingForAJobDescription
                  ? `Описание работы: ${props.profile.lookingForAJobDescription}`
                  : null}
            </li>
         </ul>
      </div>
   );
};

export default ProfileInfo;