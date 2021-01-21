import React, { Component } from 'react';

import Header from '../header';
import RandomPlanets from '../random-planets';

import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';

import { SwapiServiceProvider } from '../swapi-service-context';

import {
	PersonList,
	PlanetList,
	StarshipList,
	PersonDetails,
	PlanetDetails,
	StarshipDetails
} from '../sw-components'

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

		return (
			<ErrorBoundry>
				<SwapiServiceProvider value={ this.swapiService }>
					<div className='container stardb-app'>
						<Header />

						<PersonDetails itemId={11} />

						<PlanetDetails itemId={8} />

						<StarshipDetails itemId={9} />

						<PersonList />

						<PlanetList />

						<StarshipList />
					</div>
				</SwapiServiceProvider>
			</ErrorBoundry>
		);
	};
};