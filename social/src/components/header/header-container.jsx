import React, {Component} from 'react';
import Header from './header';
import {connect} from "react-redux";
import {showAuthedPerson} from '../../redux/auth-reducer';

class HeaderContainer extends Component {

   componentDidMount() {
      this.props.showAuthedPerson();
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

export default connect(MapStateToProps, {showAuthedPerson})(HeaderContainer);