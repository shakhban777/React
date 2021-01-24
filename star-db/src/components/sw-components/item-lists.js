import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helper';

const withChildFunction = (fn) => (Wrapped) => {
	return (props) => {
		return (
			<Wrapped {...props}>
				{fn}
			</Wrapped>
		);
	};
};

const renderName =  ({name}) => <span>{ name }</span> ;
const renderModelAndName = ({ model, name }) => <span>{name} ({model})</span>;


const mapPersonMethodsToProp = (swapiService) => {
	return {
		getData: swapiService.getAllPeople
	};
};

const mapPlanetMethodsToProp = (swapiService) => {
	return {
		getData: swapiService.getAllPlanets
	};
};

const mapStarshipMethodsToProp = (swapiService) => {
	return {
		getData: swapiService.getAllStarships
	};
};

const PersonList = withSwapiService(mapPersonMethodsToProp)(
							withData(
								withChildFunction(renderName)(
									ItemList)));

const PlanetList = withSwapiService(mapPlanetMethodsToProp)(
							withData(
								withChildFunction(renderName)(
									ItemList)));

const StarshipList = withSwapiService(mapStarshipMethodsToProp)(
								withData(
									withChildFunction(renderModelAndName)(
										ItemList)));

export {
	PersonList,
	PlanetList,
	StarshipList
};