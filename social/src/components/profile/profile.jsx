import React from 'react';
import ProfileInfo from "./profile-info/profile-info";

import s from './profile.module.css';
import MyPostsContainer from "./my-posts/my-posts-container";

const Profile = () => {
	return (
		<main className={s.content}>
			<ProfileInfo />
			<MyPostsContainer />
		</main>
	);
};

export default Profile;