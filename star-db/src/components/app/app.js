import React from 'react';
import Header from '../header';
import RandomPlanets from '../random-planets';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

const App = () => {
	return (
		<div className='container'>
			<Header />
			<RandomPlanets />

			<div className="d-flex flex-column">
				<ItemList />
				<PersonDetails />
			</div>
		</div>
	);
};

export default App;