import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indocator';
import SwapiService from '../../services/swapi-service'

import './people-page.css';

export default class PeoplePage extends Component {

	swapiService = new SwapiService();

	state = {
		selectedPerson: null,
		hasError: false
	};

	componentDidCatch(error, info) {
		this.setState({hasError: true});
	}

	onPersonSelected = (id) => {
		this.setState({
			selectedPerson: id
		});
	}

	render() {
		const {selectedPerson, hasError} = this.state;

		if (hasError) {
			return <ErrorIndicator/>
		}

		return (
			<div className="row mb2">
				<div className="col-md-6 mb-2">
					<ItemList
						OnItemSelected={this.onPersonSelected}
						getData={this.swapiService.getAllPeople}
						renderItem={({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`}/>
				</div>
				<div className="col-md-6">
					<PersonDetails personId={selectedPerson} />
				</div>
			</div>
		);
	}
}