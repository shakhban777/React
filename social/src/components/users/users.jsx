import React, {Component} from 'react';
import s from './users.module.css';
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png';

export default class Users extends Component {
   componentDidMount() {
      axios
         .get('https://social-network.samuraijs.com/api/1.0/users')
         .then(response => {
            this.props.setUsers(response.data.items)
         });
   }

   render() {
      return (
         <div className={s.users}>
            <ul className={s.userList}>
               {this.props.users.map(u => {
                  return (
                     <li key={u.id} className={s.listItem}>
                        <div className={s.left}>
                           <img src={u.photos.small ? u.photos.small : userPhoto} alt="avatar"
                                className={s.userPhoto}/>
                           {u.followed
                              ? <button
                                 onClick={() => this.props.unfollow(u.id)}
                                 className={s.follow_btn}><span className={s.follow_btn_content}>Unfollow</span>
                              </button>
                              : <button
                                 onClick={() => this.props.follow(u.id)}
                                 className={s.follow_btn}><span className={s.follow_btn_content}>Follow</span>
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
   }
};