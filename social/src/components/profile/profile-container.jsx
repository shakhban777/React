import React, {Component} from 'react';
import Profile from './profile';
import {connect} from "react-redux";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import s from './profile.module.css';

class ProfileContainer extends Component {

   componentDidMount() {
      axios
         .get(`https://social-network.samuraijs.com/api/1.0/profile/9`)
         .then(response => {
            this.props.setUserProfile(response.data);
         });
   }

   render() {
      return (
         <main className={s.content}>
            <Profile {...this.props} profile={this.props.profile} />
         </main>
      );
   }
}

const mapStateToProps = (state) => ({
   profile: state.profilePage.profile
});

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);