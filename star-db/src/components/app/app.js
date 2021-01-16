import React, { Component } from 'react';

import Header from '../header';
import RandomPlanets from '../random-planets';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends Component {
	state = {
		showRandomPlanet: true,
		selectedPerson: null
	}

	onPersonSelected = (id) => {
		this.setState({
			selectedPerson: id
		});
	}

	render() {
		const { selectedPerson } = this.state;

		return (
			<div className='container'>
				<Header />
				<RandomPlanets />

				<div className="row mb2">
					<div className="col-md-6">
						<ItemList OnItemSelected={this.onPersonSelected}/>
					</div>
					<div className="col-md-6">
						<PersonDetails personId={selectedPerson}/>
					</div>
				</div>
			</div>
		);
	};
};