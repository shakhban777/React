import React from 'react';
import s from './users.module.css';

const Users = (props) => {

   if (props.users.length === 0) {
      props.setUsers([
         {
            id: 1,
            followed: true,
            fullName: 'Hasan',
            status: "I'm a doctor!",
            location: {city: 'Saratov', country: 'Russia'},
            userPhotoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'
         },
         {
            id: 2,
            followed: true,
            fullName: 'Shakhru',
            status: "I'm a Business-Man!",
            location: {city: 'Mahachkala', country: 'Dagestan'},
            userPhotoUrl: 'https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg'
         },
         {
            id: 3,
            followed: true,
            fullName: 'Airat',
            status: "I'm a CHPU-Master 😎",
            location: {city: 'Ketz', country: 'Factory'},
            userPhotoUrl: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD-%D1%81%D0%B5%D1%80%D1%8C%D0%B5%D0%B7%D0%BD%D1%8B%D0%B5-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-%D1%84%D0%BE%D1%82%D0%BE-029.jpg'
         },
         {
            id: 4,
            followed: true,
            fullName: 'Rinaz',
            status: "I'm a father!",
            location: {city: 'Laishevo', country: 'Russia'},
            userPhotoUrl: 'https://png.pngtree.com/png-vector/20190329/ourmid/pngtree-vector-avatar-icon-png-image_889339.jpg'
         },
         {
            id: 5,
            followed: false,
            fullName: 'Shakhban',
            status: "I'm a programmer",
            location: {city: 'Kazan', country: 'Russia'},
            userPhotoUrl: 'https://avatars.githubusercontent.com/u/64259612?s=400&u=836befa4869459ce2532b2426fe8e365003ecf3b&v=4'
         },
         {
            id: 6,
            followed: false,
            fullName: 'Morgan',
            status: "I'm a Freeman",
            location: {city: 'Philadelphia', country: 'USA'},
            userPhotoUrl: 'https://png.pngtree.com/png-vector/20190329/ourmid/pngtree-vector-avatar-icon-png-image_889339.jpg'
         },
         {
            id: 7, followed: false,
            fullName: 'Kitty',
            status: "Mew",
            location: {city: 'Tray', country: 'Flat'},
            userPhotoUrl:'https://www.purina.ru/sites/purina.ru/files/2018-07/%D0%B1%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D0%BA%D0%BE%D1%88%D0%BA%D0%B0.jpg'
         }
      ])
   }

   const users = props.users.map(u => {
      return (
         <li key={u.id} className={s.listItem}>
            <div className={s.left}>

               <img src= {u.userPhotoUrl} alt="avatar" className={s.userPhoto}/>

               { u.followed
                  ? <button
                        onClick={() => props.unfollow(u.id)}
                        className={s.follow_btn}><span className={s.follow_btn_content}>Unfollow</span>
                  </button>
                  : <button
                     onClick={() => props.follow(u.id)}
                     className={s.follow_btn}><span className={s.follow_btn_content}>Follow</span>
                  </button>
               }
            </div>
            <div className={s.right}>
               <div className={s.info}>
                  <p className={s.name}>{u.fullName}</p>
                  <p className={s.status}>{u.status}</p>
               </div>
               <div className={s.location}>
                  <p className={s.city}>{u.location.country}</p>
                  <p>{u.location.city}</p>
               </div>
            </div>
         </li>
      );
   });

   return (
     <div className={s.users}>
        <ul className={s.userList}>
           {users}
        </ul>
     </div>
   );
};

export default Users;