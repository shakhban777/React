import React from 'react';
import Post from './post/post';

import s from './my-posts.module.css';

const MyPosts = (props) => {

	const newPostElement = React.createRef();

	const onAddPosts = () => {
		props.addPosts();
	};

	const onPostChange = () => {
		const text = newPostElement.current.value;
		props.postChange(text);
	};

	return (
		<div className={s.myPost}>
			<h3>My posts</h3>
			<textarea
				placeholder='Enter new post'
				className={s.postArea}
				ref={newPostElement}
				onChange={onPostChange}
				value={props.newPostText}/>
			<button onClick={onAddPosts}><span>Add post</span></button>
			<div className={s.posts}>
				{
					props.posts.map(({id, message, likeCounts}) => {
						return <Post key={id} message={message} likeCounts={likeCounts}/>;
					})
				}
			</div>
		</div>
	);
};

export default MyPosts;