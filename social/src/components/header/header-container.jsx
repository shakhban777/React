import React, {Component} from 'react';
import Header from './header';
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from '../../redux/auth-reducer';
import DefaultPhoto from '../../assets/images/user.png';

class HeaderContainer extends Component {

   componentDidMount() {
      axios
         .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
         })
         .then(response => {
            if (response.data.resultCode === 0) {
               const {email, id, login} = response.data.data;
               axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
                  .then(resp => {
                     let avatar = resp.data.photos.small;
                     if (!avatar) {
                        avatar = DefaultPhoto;
                     }
                     this.props.setAuthUserData(email, id, login, avatar);
                  })
            }
         });
   }

   render() {
      return <Header {...this.props}/>;
   }
}

const MapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
   email: state.auth.email,
   avatar: state.auth.avatar
});

export default connect(MapStateToProps, {setAuthUserData})(HeaderContainer);