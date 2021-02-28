import React from 'react';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import Dialogs from '../dialogs/dialogs';
import Profile from "../profile/profile";
import News from "../news/news";
import Movies from "../movies/movies";
import Settings from "../settings/settings";
import {BrowserRouter, Route} from "react-router-dom";

import './app.css';

const App = (props) => {
   const state = props.store.getState();
   const {users} = state.sidebar;

   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <Header/>
            <Navbar friends={users}/>
            <div className='app-wrapper-content'>
               <Route exact path='/'><h2>Welcome to my Social Network!😉</h2></Route>
               <Route path='/dialogs/'
                      render={() => (
                         <Dialogs store={props.store}/>
                      )}/>
               <Route path='/profile/'
                      render={() => (
                         <Profile store={props.store}/>
                      )}/>
               <Route path='/news/'
                      render={() => <News/> }/>
               <Route path='/movies/'
                      render={() => <Movies/> }/>
               <Route path='/settings/'
                      render={() => <Settings/> }/>
            </div>
         </div>
      </BrowserRouter>

   );
}

export default App;