import React from 'react';
import Post from './post';

import s from './my-posts.module.css';

const MyPosts = () => {
	return (
		<>
			<div className={s.myPost}>
				<p>My posts</p>
				<textarea/>
				<button>Add post</button>

			</div>
			<Post message={'Hello my friend!'} likeCounts={'5'}/>
			<Post message={'How are you?'} likeCounts={'15'}/>
		</>
	);
};

export default MyPosts;