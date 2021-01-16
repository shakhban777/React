import React, { Component, Fragment } from 'react';

import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../error-indocator/';
import Spinner from '../spinner';

import './random-planets.css';

export default class RandomPlanets extends Component {

	swapiService = new SwapiService();

	state = {
		planet: {},
		loading: true,
		error: false
	};

	componentDidMount() {
		this.updatePlanet();
		this.interval = setInterval(this.updatePlanet, 7500);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	onPlanetLoaded = (planet) => {
		this.setState({
			planet,
			loading: false
		});
	}

	onError = () => {
		this.setState({
			error: true,
			loading: false
		})
	}

	updatePlanet = () => {
		const id = Math.floor(Math.random() * 25 + 3);
		this.swapiService
			.getPlanet(id)
			.then(this.onPlanetLoaded)
			.catch(this.onError);
	}

	render() {
		const { planet, loading, error } = this.state;

		const hasData = !(loading || error);

		const errorMessage = error ? <ErrorIndicator/> : null;
		const spinner = loading ? <Spinner/> : null;
		const content = hasData ? <PlanetVeiw planet={planet}/> : null;

		return (
			<div className="random-planet jumbotron rounded">
				{ errorMessage }
				{ spinner }
				{ content }
			</div>
		);
	}
};

const PlanetVeiw = ({ planet }) => {

	const { id, name, population, rotationPeriod, diameter } = planet;

	return(
		<Fragment>
			<img className="planet-image"
					src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
					alt="planet" />
				<div>
					<h4>{name}</h4>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<span className="term">Population</span>
							<span>{population}</span>
						</li>
						<li className="list-group-item">
							<span className="term">Rotation Period</span>
							<span>{rotationPeriod}</span>
						</li>
						<li className="list-group-item">
							<span className="term">Diameter</span>
							<span>{diameter}</span>
						</li>
					</ul>
				</div>
		</Fragment>
	);
};