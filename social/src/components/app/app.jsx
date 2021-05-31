import React, {Component} from 'react';
import HeaderContainer from '../header/header-container';
import Navbar from '../navbar/navbar';
import DialogsContainer from "../dialogs/dialogs-container";
import News from "../news/news";
import Movies from "../movies/movies";
import Settings from "../settings/settings";
import {Route, withRouter} from "react-router-dom";
import ProfileContainer from '../profile/profile-container';
import UsersContainer from "../users/users-container";
import Login from "../login/login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "../../redux/app-reducer";
import Preloader from "../common/preloader";
import './app.css';

class App extends Component {
   componentDidMount() {
      this.props.initializeApp();
   }

   render() {
      if (!this.props.initialized) {
         return <Preloader/>
      }

      return (
         <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
               <Route exact path='/'><h2>Welcome to my Social Network!😉</h2></Route>
               <Route path='/dialogs/'
                      render={() => <DialogsContainer/>}/>
               <Route path='/profile/:userId?'
                      render={() => <ProfileContainer/>}/>
               <Route path='/users/'
                      render={() => <UsersContainer/>}/>
               <Route path='/news/'
                      render={() => <News/>}/>
               <Route path='/movies/'
                      render={() => <Movies/>}/>
               <Route path='/settings/'
                      render={() => <Settings/>}/>
               <Route path='/login/'
                      render={() => <Login/>}/>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state) => ({
   initialized: state.app.initialized
});

export default compose(
   connect(mapStateToProps, {initializeApp}),
   withRouter
)(App);