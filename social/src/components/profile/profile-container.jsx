import React, {Component} from 'react';
import Profile from './profile';
import {connect} from "react-redux";
import {getStatus, getUserProfile, myProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import s from './profile.module.css';
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends Component {

   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = 15595;
      }
      this.props.getUserProfile(userId);
      this.props.getStatus(userId);

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
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
         </main>
      );
   }
}

const mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status
});

export default compose(
   connect(mapStateToProps, {getUserProfile, myProfile, getStatus, updateStatus}),
   withAuthRedirect,
   withRouter
)(ProfileContainer);