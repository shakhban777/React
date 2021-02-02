import React from 'react';
import Header from '../header';
import Navbar from '../navbar';
import Profile from '../profile';
import './app.css';

const App = () => {
	return (
		<div className='app-wrapper'>
			<Header/>
			<Navbar/>
			<Profile/>
		</div>
	);
}

export default App;