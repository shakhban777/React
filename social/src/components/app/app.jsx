import React from 'react';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import DialogsContainer from "../dialogs/dialogs-container";
import News from "../news/news";
import Movies from "../movies/movies";
import Settings from "../settings/settings";
import {BrowserRouter, Route} from "react-router-dom";
import ProfileContainer from '../profile/profile-container';
import UsersContainer from "../users/users-container";

import './app.css';

const App = () => {
   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
               <Route exact path='/'><h2>Welcome to my Social Network!😉</h2></Route>
               <Route path='/dialogs/'
                      render={() => <DialogsContainer/>}/>
               <Route path='/profile/'
                      render={() => <ProfileContainer/>}/>
               <Route path='/users/'
                      render={() => <UsersContainer/>}/>
               <Route path='/news/'
                      render={() => <News/>}/>
               <Route path='/movies/'
                      render={() => <Movies/>}/>
               <Route path='/settings/'
                      render={() => <Settings/>}/>
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;