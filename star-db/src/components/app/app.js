import React, { Component } from 'react';

import Header from '../header';
import RandomPlanets from '../random-planets';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import { SwapiServiceProvider } from '../swapi-service-context';
import { PeoplePage, PlanetsPage, StarshipsPage, SecretPage, LoginPage } from '../pages';

import './app.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {

	state = {
		swapiService: new SwapiService(),
		isLoggedIn: false
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

	onLogin = () => {
		this.setState({isLoggedIn: true})
	};

	render() {
		const { swapiService, isLoggedIn } = this.state;

		return (
			<ErrorBoundry>
				<SwapiServiceProvider value={ swapiService }>
					<Router>
						<div className='container stardb-app'>
							<Header onServiceChange={this.onServiceChange}/>
							<RandomPlanets />

							<Switch>
								<Route path='/'
										render={() => <h2>Welcome to StarDB!</h2> }
										exact />
								<Route path="/people/:id?" component={PeoplePage} />
								<Route path='/planets/' component={PlanetsPage}/>
								<Route path='/starships/' exact component={StarshipsPage}/>
								<Route path='/starships/:id'
										render={({ match }) => {
											const { id } = match.params;
											return <StarshipDetails itemId={id}/>
										}}/>

								<Route
									path='/login'
									render={() => (
										<LoginPage
											isLoggedIn={isLoggedIn}
											onLogin={this.onLogin} />
									)} />

								<Route
									path='/secret'
									render={() => (
										<SecretPage isLoggedIn={isLoggedIn}/>
									)} />

								<Route render={() => <h2 className='jumbotron'>Page not found! 😥</h2>}/>
							</Switch>
						</div>
					</Router>
				</SwapiServiceProvider>
			</ErrorBoundry>
		);
	};
};