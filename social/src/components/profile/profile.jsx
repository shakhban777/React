import React from 'react';
import MyPosts from './my-posts/my-posts';
import ProfileInfo from "./profile-info/profile-info";

import s from './profile.module.css';

const Profile = ({posts}) => {
	return (
		<main className={s.content}>
			<ProfileInfo/>
			<MyPosts posts={posts}/>
		</main>
	);
};

export default Profile;