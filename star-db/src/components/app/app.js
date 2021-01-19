import React, { Component } from 'react';

import Header from '../header';
import RandomPlanets from '../random-planets';
import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry';
import ItemList from '../item-list';

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

		const { getPerson, getStarship, getPersonImage, getStarshipImage, getAllPeople, getAllPlanets } = this.swapiService;

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
				itemId={9}
				getData={ getStarship }
				getImageUrl={ getStarshipImage }>

				<Record field="model" label="Model" />
				<Record field="length" label="Length" />
				<Record field="costInCredits" label="Cost" />

			</ItemDetails>
		);

		return (
			<ErrorBoundry>
				<div className='container stardb-app'>
					<Header />

					<ItemList
						getData={getAllPeople}
						onItemSelected={() => {}}>

						{ ({name}) => <span>{ name }</span> }
					</ItemList>

					<ItemList
						getData={getAllPlanets}
						onItemSelected={() => {}}>

						{ ({name}) => <span>{name}</span> }
          		</ItemList>

				</div>
			</ErrorBoundry>
		);
	};
};