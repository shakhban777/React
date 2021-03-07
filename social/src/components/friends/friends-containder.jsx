import Friends from "./friends";
import {connect} from "react-redux";

const mapToStateToProps = (state) => {
   return {
      state: state.usersPage
   };
};

const FriendsContainer = connect(mapToStateToProps)(Friends);

export default FriendsContainer;