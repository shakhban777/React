import React from 'react';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from "react-router-dom";
import {followAPI} from '../../api/api';
import s from './users.module.css';

const Users = (props) => {

   const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
   const pages = [];

   for (let i = Math.max(props.currentPage - 5, 1); i <= Math.max(1, Math.min(props.currentPage + 5, pagesCount)); i++) {
      pages.push(i);
   }

   return (
      <div className={s.users}>
         <ul className={s.pages}>
            {pages.map(p => {
               return <li
                  key={p}
                  className={props.currentPage === p ? s.pages__active : undefined}
                  onClick={() => props.onPageChanged(p)}>
                  {p}
               </li>
            })}
         </ul>
         <ul className={s.userList}>
            {props.users.map(u => {
               return (
                  <li key={u.id} className={s.listItem}>
                     <div className={s.left}>
                        <NavLink to={`/profile/${u.id}`}>
                           <img src={u.photos.small ? u.photos.small : userPhoto} alt="avatar"
                                className={s.userPhoto}/>
                        </NavLink>
                        {u.followed
                           ? <button
                              className={s.follow_btn}>
                              <span className={s.follow_btn_content}
                                    onClick={() => {
                                       followAPI.unfollowUser(u.id)
                                          .then(data => {
                                             if (data.resultCode === 0) {
                                                props.unfollow(u.id);
                                             }
                                          });
                                    }}>
                                 Unfollow
                              </span>
                           </button>
                           : <button
                              className={s.follow_btn}>
                              <span
                                 className={s.follow_btn_content}
                                 onClick={() => {
                                    followAPI.followUser(u.id)
                                       .then(data => {
                                          if (data.resultCode === 0) {
                                             props.follow(u.id);
                                          }
                                       });
                                 }}>
                                 Follow
                              </span>
                           </button>
                        }
                     </div>
                     <div className={s.right}>
                        <div className={s.info}>
                           <p className={s.name}>{u.name}</p>
                           <p className={s.status}>{u.status}</p>
                        </div>
                        <div className={s.location}>
                           <p className={s.city}>{'u.location.country'}</p>
                           <p>{'u.location.city'}</p>
                        </div>
                     </div>
                  </li>
               );
            })}
         </ul>
      </div>
   );
};

export default Users;