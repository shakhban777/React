import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helper';

const withChildFunction = (Wrapped, fn) => {
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

const PersonList = withSwapiService(
							withData(
								withChildFunction(ItemList, renderName)),
							mapPersonMethodsToProp);

const PlanetList = withSwapiService(
							withData(
								withChildFunction(ItemList, renderName)),
							mapPlanetMethodsToProp);

const StarshipList = withSwapiService(
								withData(
									withChildFunction(ItemList, renderModelAndName)),
								mapStarshipMethodsToProp);

export {
	PersonList,
	PlanetList,
	StarshipList
};