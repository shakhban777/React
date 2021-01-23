import React, { Component, Fragment } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorButton from '../error-button';

import './item-details.css';

const Record = ({ item, field, label }) => {
	return (
		<li className="list-group-item">
			<span className="term">{ label }</span>
			<span>{ item[field] }</span>
		</li>
	);
};

export {
	Record
};

export default class ItemDetails extends Component {

	swapiSercive = new SwapiService();

	state = {
		item: null,
		loading: true,
		image: null
	};

	componentDidMount() {
		this.updateItem();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.itemId !== this.props.itemId
				|| prevProps.getData !== this.props.getData
				|| prevProps.getImageUrl !== this.props.getImageUrl ) {
			this.updateItem();
			this.setState({loading: true});
		}
	}

	updateItem() {
		const { itemId, getData, getImageUrl } = this.props;

		if (!itemId) {
			return;
		}

		getData(itemId)
			.then((item) => {
				this.setState({
					item,
					loading: false,
					image: getImageUrl(item)
				});
			});
	}

	render() {

		const { item, loading, image } = this.state;

		if (!item) {
			return <span>Select a item from a list</span>;
		}

		const spinner = loading ? <Spinner/> : null;

		const content =  !loading
			? <ItemView
				item={item}
				image={image}
				children={this.props.children} />
			: null;

		return (
			<div className="item-details card">
				{spinner}
				{content}
			</div>
		);
	}
}


const ItemView = ({ item, image, children }) => {

	const { name } = item;

	return(
		<Fragment>
			<img className="item-image"
					  src={image}
					  alt="item"/>

			<div className="card-body">
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					{
						React.Children.map(children, (child) => {
							return React.cloneElement(child, { item });
						})
					}
				</ul>
				<ErrorButton/>
			</div>
		</Fragment>
	);
};