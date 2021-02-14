import React from 'react';
import MyPosts from './my-posts/my-posts';
import ProfileInfo from "./profile-info/profile-info";

import s from './profile.module.css';

const Profile = ({updateNewPostText, addPost, ...propfilePage}) => {
	return (
		<main className={s.content}>
			<ProfileInfo/>
			<MyPosts
				addPost={addPost}
				updateNewPostText={updateNewPostText}
				{...propfilePage}/>
		</main>
	);
};

export default Profile;