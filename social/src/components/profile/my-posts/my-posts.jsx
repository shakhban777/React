import React from 'react';
import Post from './post/post';

import s from './my-posts.module.css';

const MyPosts = ({posts}) => {

	const newPostElement = React.createRef();

	const addPost = () => {
		const text = newPostElement.current.value;
		console.log(text);
	};

	return (
		<div className={s.myPost}>
			<h3>My posts</h3>
			<textarea ref={newPostElement} />
			<button	onClick={addPost}><span>Add post</span></button>
			<div className={s.posts}>
				{
					posts.map(({id, message, likeCounts}) => {
						return <Post key={id} message={message} likeCounts={likeCounts}/>;
					})
				}
			</div>
		</div>
	);
};

export default MyPosts;