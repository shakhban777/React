import React, { Component } from 'react';

import Header from '../header';
import RandomPlanets from '../random-planets';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indocator';

import './app.css';

export default class App extends Component {
	state = {
		showRandomPlanet: true,
		selectedPerson: null,
		hasError: false
	};

	componentDidCatch() {
		console.log('componentDidCatch()');
		this.setState({hasError: true});
	}

	toggleRandomPlanet = () => {
		this.setState((state) => {
			return {
				showRandomPlanet: !state.showRandomPlanet
			}
		});
	};

	onPersonSelected = (id) => {
		this.setState({
			selectedPerson: id
		});
	}

	render() {
		const { selectedPerson, showRandomPlanet, hasError } = this.state;

		if (hasError) {
			return <ErrorIndicator/>
		}

		const planet = showRandomPlanet
			? <RandomPlanets />
			: null;

		return (
			<div className='container stardb-app'>
				<Header />
				{planet}

				<div className='row button-row'>
					<button
						className="toggle-planet btn btn-warning btn-lg"
						onClick={this.toggleRandomPlanet}>
						Toggle Random Planet
					</button>
					<ErrorButton/>
				</div>
				<div className="row mb2">
					<div className="col-md-6">
						<ItemList OnItemSelected={this.onPersonSelected} />
					</div>
					<div className="col-md-6">
						<PersonDetails personId={selectedPerson} />
					</div>
				</div>
			</div>
		);
	};
};