import React, {Component} from 'react';
import Profile from './profile';
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
// import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";
import s from './profile.module.css';
import {compose} from "redux";

class ProfileContainer extends Component {

   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = this.props.authorizedUserId;
      }
      this.props.getUserProfile(userId);
      this.props.getStatus(userId);
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
   status: state.profilePage.status,
   authorizedUserId: state.auth.userId,
   isAuth: state.auth.isAuth
});

export default compose(
   connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
   // withAuthRedirect,
   withRouter
)(ProfileContainer);