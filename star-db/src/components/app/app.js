import React, { Component } from 'react';

import Header from '../header';
import RandomPlanets from '../random-planets';
import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

import './app.css';

export default class App extends Component {

	swapiService = new SwapiService();

	state = {
		showRandomPlanet: true
	};

	toggleRandomPlanet = () => {
		this.setState((state) => {
			return {
				showRandomPlanet: !state.showRandomPlanet
			}
		});
	};

	render() {
		const { showRandomPlanet } = this.state;

		const planet = showRandomPlanet
			? <RandomPlanets />
			: null;

		const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;

		const personDetails = (
			<ItemDetails
				itemId={11}
				getData={ getPerson }
				getImageUrl={ getPersonImage } >

				<Record field="gender" label="Gender" />
				<Record field="eyeColor" label="Eye Color" />

			</ItemDetails>
		);

		const starshiDetails = (
			<ItemDetails
				itemId={5}
				getData={ getStarship }
				getImageUrl={ getStarshipImage } />
		);

		return (
			<ErrorBoundry>
				<div className='container stardb-app'>
					<Header />

					<Row
						left={personDetails}
						right={starshiDetails} />
				</div>
			</ErrorBoundry>
		);
	};
};