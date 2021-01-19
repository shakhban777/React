import React from 'react';
import { withData } from '../hoc-helper'
import SwapiService from '../../services/swapi-service';

import './item-list.css';

const ItemList = (props) => {

	const { data, OnItemSelected, children: renderLabel } = props;

	const items = data.map((item) => {
		const { id } = item;
		const label = renderLabel(item);

		return (
			<li className="list-group-item"
					key={id}
					onClick={() => OnItemSelected(id) }>
				{ label }
			</li>
		);
	});

	return (
		<ul className="item-list list-group mb-3">
			{ items }
		</ul>
	);
}

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);