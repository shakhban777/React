import React, {Component} from 'react';
import Header from './header';
import {connect} from "react-redux";
import {getAuthUserPerson} from '../../redux/auth-reducer';

class HeaderContainer extends Component {

   componentDidMount() {
      this.props.getAuthUserPerson();
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

export default connect(MapStateToProps, {getAuthUserPerson})(HeaderContainer);