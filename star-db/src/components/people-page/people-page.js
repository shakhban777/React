import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indocator';
import SwapiService from '../../services/swapi-service'

import './people-page.css';

const Row = ({ left, right }) => {
	return (
		<div className="row mb2">
			<div className="col-md-6">
				{left}
			</div>
			<div className="col-md-6">
				{right}
			</div>
		</div>
	);
};

export default class PeoplePage extends Component {

	swapiService = new SwapiService();

	state = {
		selectedPerson: null,
		hasError: false
	};

	componentDidCatch(error, info) {
		this.setState({ hasError: true });
	}

	onPersonSelected = (id) => {
		this.setState({
			selectedPerson: id
		});
	}

	render() {
		const { selectedPerson, hasError } = this.state;

		if (hasError) {
			return <ErrorIndicator />
		}

		const itemList = (
			<ItemList
				OnItemSelected={this.onPersonSelected}
				getData={this.swapiService.getAllPeople}
				renderItem={({ name, gender, birthYear }) => (
					`${name} (${gender}, ${birthYear})`)} />
		);

		const personDetails = (
			<PersonDetails personId={selectedPerson} />
		);

		return (
			<Row left={itemList} right={personDetails}/>
		);
	}
}