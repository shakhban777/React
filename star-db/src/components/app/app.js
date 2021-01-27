import React, { Component } from 'react';

import Header from '../header';
import RandomPlanets from '../random-planets';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import { SwapiServiceProvider } from '../swapi-service-context';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

import './app.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class App extends Component {

	state = {
		swapiService: new SwapiService()
	};

	onServiceChange = () => {
		this.setState(({ swapiService }) => {
			const Service = swapiService instanceof SwapiService
				? DummySwapiService
				: SwapiService;

			return {
				swapiService: new Service()
			};
		});
	};

	render() {
		const { swapiService } = this.state;

		return (
			<ErrorBoundry>
				<SwapiServiceProvider value={ swapiService }>
					<Router>
						<div className='container stardb-app'>
							<Header onServiceChange={this.onServiceChange}/>
							<RandomPlanets />

							<Route path='/people' component={PeoplePage}/>
							<Route path='/planets' component={PlanetsPage}/>
							<Route path='/starships' component={StarshipsPage}/>

						</div>
					</Router>
				</SwapiServiceProvider>
			</ErrorBoundry>
		);
	};
};