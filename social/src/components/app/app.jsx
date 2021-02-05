import React from 'react';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import Profile from "../profile/profile";

import './app.css';

const App = () => {
   return (
      <div className='app-wrapper'>
         <Header/>
         <Navbar/>
         <div className='app-wrapper-content'>
            <Profile/>
            {/*<Dialog/>*/}
         </div>
      </div>
   );
}

export default App;