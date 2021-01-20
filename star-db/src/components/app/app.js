import React, { Component } from 'react';

import Header from '../header';
import RandomPlanets from '../random-planets';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
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
				<div className='container stardb-app'>
					<Header />

					<PersonDetails itemId={11} />

					<PlanetDetails itemId={8} />

					<StarshipDetails itemId={9} />

					<PersonList>
						{ ({name}) => <span>{ name }</span> }
					</PersonList>

					<PlanetList>
						{ ({name}) => <span>{ name }</span> }
					</PlanetList>

					<StarshipList>
						{ ({name}) => <span>{ name }</span> }
					</StarshipList>

				</div>
			</ErrorBoundry>
		);
	};
};