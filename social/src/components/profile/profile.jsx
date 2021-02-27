import React from 'react';
import ProfileInfo from "./profile-info/profile-info";

import s from './profile.module.css';
import MyPostsContainer from "./my-posts/my-posts-container";

const Profile = ({dispatch, ...propfilePage}) => {
	return (
		<main className={s.content}>
			<ProfileInfo/>
			<MyPostsContainer
				dispatch={dispatch}
				{...propfilePage}/>
		</main>
	);
};

export default Profile;