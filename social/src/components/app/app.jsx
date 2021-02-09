import React from 'react';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import Dialogs from '../dialogs/dialogs';
import Profile from "../profile/profile";
import {BrowserRouter, Route} from "react-router-dom";

import './app.css';
import News from "../news/news";
import Movies from "../movies/movies";
import Settings from "../settings/settings";

const App = ({state}) => {

   const {posts} = state.profilePage;
   const {dialogs, messages} = state.dialogsPage;
   const {friends} = state.sidebar;

   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <Header/>
            <Navbar friends={friends}/>
            <div className='app-wrapper-content'>
               <Route exact path='/'><h2>Welcome to my Social Network!😉</h2></Route>
               <Route path='/dialogs/'
                      render={() => <Dialogs dialogs={dialogs} messages={messages} />}/>
               <Route path='/profile/'
                      render={() => <Profile posts={posts} />}/>
               <Route path='/news/'
                      component={News}/>
               <Route path='/movies/'
                      component={Movies}/>
               <Route path='/settings/'
                      component={Settings}/>
            </div>
         </div>
      </BrowserRouter>

   );
}

export default App;