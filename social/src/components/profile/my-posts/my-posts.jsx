import React from 'react';
import Post from './post';

import s from './my-posts.module.css';

const MyPosts = () => {
	return (
		<>
			<div className={s.myPost}>
				<p>My posts</p>
				<textarea></textarea>
				<button>Add post</button>

			</div>
			<Post />
			<Post />
			<Post />

		</>
	);
};

export default MyPosts;