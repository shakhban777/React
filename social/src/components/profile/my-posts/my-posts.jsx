import React from 'react';
import Post from './post/post';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";

import s from './my-posts.module.css';

const MyPosts = ({posts, newPostText, dispatch}) => {

	const newPostElement = React.createRef();

	const addPosts = () => {
		const action = addPostActionCreator();
		dispatch(action);
	};

	const onPostChange = () => {
		const text = newPostElement.current.value;
		dispatch(onPostChangeActionCreator(text));
	};

	return (
		<div className={s.myPost}>
			<h3>My posts</h3>
			<textarea
				placeholder='Enter new post'
				className={s.postArea}
				ref={newPostElement}
				onChange={onPostChange}
				value={newPostText}/>
			<button onClick={addPosts}><span>Add post</span></button>
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