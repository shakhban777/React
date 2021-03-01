import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./my-posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
   return {
      newPostText: state.profilePage.newPostText,
      posts: state.profilePage.posts
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addPosts: () => {
         dispatch(addPostActionCreator());
      },

      postChange: (text) => {
         dispatch(onPostChangeActionCreator(text));
      }
   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;