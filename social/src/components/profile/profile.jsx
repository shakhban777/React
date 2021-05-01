import React from 'react';
import ProfileInfo from "./profile-info/profile-info";
import MyPostsContainer from "./my-posts/my-posts-container";
import s from './profile.module.css';

const Profile = (props) => {
	return (
		<main className={s.content}>
			<ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
			<MyPostsContainer />
		</main>
	);
};

export default Profile;