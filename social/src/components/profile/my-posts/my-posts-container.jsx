import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./my-posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      addPosts: (addNewPostBody) => {
         dispatch(addPostActionCreator(addNewPostBody));
      },
   };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;