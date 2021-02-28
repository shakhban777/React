import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./my-posts";
import StoreContext from "../../../store-context";

const MyPostsContainer = () => {
   return (
      <StoreContext.Consumer>
         {
            (store) => {
               const state = store.getState();
               const dispatch = store.dispatch;

               const addPosts = () => {
                  dispatch(addPostActionCreator());
               };

               const postChange = (text) => {
                  dispatch(onPostChangeActionCreator(text));
               };

					return (
						<MyPosts
							newPostText={state.profilePage.newPostText}
							posts={state.profilePage.posts}
							addPosts={addPosts}
							postChange={postChange}/>
					);
            }
         }
      </StoreContext.Consumer>
   )
};

export default MyPostsContainer;