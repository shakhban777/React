import React from 'react';
import Post from './post/post';

import s from './my-posts.module.css';

const MyPosts = () => {
	return (
		<>
			<div className={s.myPost}>
				<h3>My posts</h3>
				<textarea/>
				<button><span>Add post</span></button>
			</div>
			<Post message={'Hello my friend!'} likeCounts={'5'}/>
			<Post message={'How are you?'} likeCounts={'15'}/>
		</>
	);
};

export default MyPosts;