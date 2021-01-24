import React from 'react';
import ItemList from '../item-list';

import {
	withData,
	withSwapiService,
	withChildFunction,
	compose
} from '../hoc-helper';

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

const PersonList = compose (
							withSwapiService(mapPersonMethodsToProp),
							withData,
							withChildFunction(renderName)
						 )(ItemList);

const PlanetList = compose (
							withSwapiService(mapPlanetMethodsToProp),
							withData,
							withChildFunction(renderName)
						)(ItemList);

const StarshipList = compose (
							withSwapiService(mapStarshipMethodsToProp),
							withData,
							withChildFunction(renderModelAndName)
						)(ItemList);

export {
	PersonList,
	PlanetList,
	StarshipList
};