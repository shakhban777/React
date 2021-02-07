import React from 'react';
import Post from './post/post';

import s from './my-posts.module.css';

const postsData = [
	{id: 1, message: 'Hello my friend!', likeCounts: 5},
	{id: 2, message: 'How are you?', likeCounts: 13}
];

const MyPosts = () => {
	return (
		<div className={s.myPost}>
			<h3>My posts</h3>
			<textarea/>
			<button><span>Add post</span></button>
			<div className={s.posts}>
				{
					postsData.map(({id, message, likeCounts}) => {
						return <Post key={id} message={message} likeCounts={likeCounts}/>;
					})
				}
			</div>
		</div>
	);
};

export default MyPosts;