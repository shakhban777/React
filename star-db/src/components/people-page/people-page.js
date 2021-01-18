import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-service'
import Row from '../row';
import ErrorBoundry from '../error-boundry';

import './people-page.css';

export default class PeoplePage extends Component {

	swapiService = new SwapiService();

	state = {
		selectedPerson: null,
	};

	onPersonSelected = (id) => {
		this.setState({
			selectedPerson: id
		});
	}

	render() {
		const { selectedPerson } = this.state;

		const itemList = (
			<ItemList
				OnItemSelected={this.onPersonSelected}
				getData={this.swapiService.getAllPeople}>

				{(i) => (
					`${i.name} (${i.birthYear})`
				)}

			</ItemList>
		);

		const personDetails = (
			<ErrorBoundry>
				<PersonDetails personId={selectedPerson} />
			</ErrorBoundry>
		);

		return (
			<Row left={itemList} right={personDetails}/>
		);
	}
}