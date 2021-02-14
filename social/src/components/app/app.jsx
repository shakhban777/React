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

const App = ({state, addPost, updateNewPostText}) => {

   const {...propfilePage} = state.profilePage;

   // cut dialogs from here
   const {messages} = state.dialogsPage;
   const {users} = state.sidebar;

   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <Header/>
            <Navbar friends={users}/>
            <div className='app-wrapper-content'>
               <Route exact path='/'><h2>Welcome to my Social Network!😉</h2></Route>
               <Route path='/dialogs/'
                      render={() => <Dialogs dialogs={users} messages={messages} />}/>
               <Route path='/profile/'
                      render={() => <Profile {...propfilePage} updateNewPostText={updateNewPostText} addPost={addPost}/>}/>
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