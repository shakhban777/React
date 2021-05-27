import React from 'react';
import Post from './post/post';
import {Field, reduxForm} from 'redux-form';
import s from './my-posts.module.css';

const MyPostForm = (props) => {
	return (
		<>
			<form onSubmit={props.handleSubmit}>
				<Field
					component={'textarea'}
					name={'addNewPostBody'}
					className={s.postArea}
					placeholder='Enter new post'/>
				<button><span>Add post</span></button>
			</form>
		</>
	);
};

const MyPostReduxForm = reduxForm({form: 'myPost'})(MyPostForm);

const MyPosts = (props) => {

	const addNewPost = (values) => {
		props.addPosts(values.addNewPostBody);
	};

	return (
		<div className={s.myPost}>
			<h3>My posts</h3>
			<MyPostReduxForm onSubmit={addNewPost}/>
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