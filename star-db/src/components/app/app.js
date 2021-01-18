import React, { Component } from 'react';

import Header from '../header';
import RandomPlanets from '../random-planets';
import PeoplePage from '../people-page';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indocator';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row';

import './app.css';
import ErrorBoundry from '../error-boundry';

export default class App extends Component {

	swapiService = new SwapiService();

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

		const { getPerson, getStarship, getPersonImage, getStarshipImage }	= this.swapiService;

		const personDetails = (
			<ItemDetails
				itemId={11}
				getData={ getPerson }
				getImageUrl={ getPersonImage } />
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