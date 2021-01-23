import React, { Component } from 'react';

import Header from '../header';
import RandomPlanets from '../random-planets';

import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
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

	state = {
		showRandomPlanet: true,
		swapiService: new DummySwapiService()
	};

	toggleRandomPlanet = () => {
		this.setState((state) => {
			return {
				showRandomPlanet: !state.showRandomPlanet
			}
		});
	}

	onServiceChange = () => {
		this.setState(({ swapiService }) => {
			const Service = swapiService instanceof SwapiService
				? DummySwapiService
				: SwapiService;

			return {
				swapiService: new Service()
			};
		});
	}

	render() {
		const { showRandomPlanet, swapiService } = this.state;

		const planet = showRandomPlanet
			? <RandomPlanets />
			: null;

		return (
			<ErrorBoundry>
				<SwapiServiceProvider value={ swapiService }>
					<div className='container stardb-app'>
						<Header onServiceChange={this.onServiceChange}/>

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