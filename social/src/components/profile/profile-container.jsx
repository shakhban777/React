import React, {Component} from 'react';
import Profile from './profile';
import {connect} from "react-redux";
import {myProfile, showProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import s from './profile.module.css';

class ProfileContainer extends Component {

   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId){
         userId = 15595;
      }
      this.props.showProfile(userId);

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

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {showProfile, myProfile})(WithUrlDataContainerComponent);