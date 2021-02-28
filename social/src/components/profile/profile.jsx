import React from 'react';
import ProfileInfo from "./profile-info/profile-info";

import s from './profile.module.css';
import MyPostsContainer from "./my-posts/my-posts-container";

const Profile = (props) => {
	return (
		<main className={s.content}>
			<ProfileInfo/>
			<MyPostsContainer store={props.store}/>
		</main>
	);
};

export default Profile;