import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./my-posts";

const MyPostsContainer = ({newPostText, posts, dispatch}) => {

	const addPosts = () => {
		dispatch(addPostActionCreator());
	};

	const postChange = (text) => {
		dispatch(onPostChangeActionCreator(text));
	};

	return <MyPosts newPostText={newPostText} posts={posts} addPosts={addPosts} postChange={postChange}/>;
};

export default MyPostsContainer;