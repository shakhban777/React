import React, { Component } from 'react';

import Header from '../header';
import RandomPlanets from '../random-planets';
import PeoplePage from '../people-page';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indocator';

import './app.css';

export default class App extends Component {
	state = {
		showRandomPlanet: true,
		hasError: false
	};

	componentDidCatch() {
		this.setState({hasError: true});
	}

	toggleRandomPlanet = () => {
		this.setState((state) => {
			return {
				showRandomPlanet: !state.showRandomPlanet
			}
		});
	};

	render() {
		const { showRandomPlanet, hasError } = this.state;

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

				<PeoplePage/>
				<PeoplePage/>
				<PeoplePage/>

			</div>
		);
	};
};