import React, {Component} from 'react';
import Profile from './profile';
import {connect} from "react-redux";
import {getUserProfile, myProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import s from './profile.module.css';
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends Component {

   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId){
         userId = 15595;
      }
      this.props.getUserProfile(userId);

      // if (!userId){
      //    this.props.myProfile();
      // } else {
      //    this.props.showProfile(userId);
      // }
   }

   render() {
      return (
         <main className={s.content}>
            <Profile {...this.props}
                     profile={this.props.profile}
            />
         </main>
      );
   }
}

const mapStateToProps = (state) => ({
   profile: state.profilePage.profile
});

export default compose(
   connect(mapStateToProps, {getUserProfile, myProfile}),
   withRouter,
   withAuthRedirect
)(ProfileContainer);