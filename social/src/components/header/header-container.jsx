import React, {Component} from 'react';
import Header from './header';
import {connect} from "react-redux";
import {logout} from '../../redux/auth-reducer';
import {compose} from "redux";

class HeaderContainer extends Component {
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

export default compose(
   connect(MapStateToProps, {logout})
)(HeaderContainer);