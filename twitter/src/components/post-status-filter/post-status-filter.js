import React, { Component } from 'react';
import { Button } from "reactstrap";
import './post-status-filter.css';


export default class PostStatusFilter extends Component {
	buttons = [
		{name: 'all', label: 'Все'},
		{name: 'like', label: 'Понравилось'}
	];

	render() {
		const {filter, onUpdateFilter} = this.props;

		const buttons = this.buttons.map(({name, label}) => {
			const active = (name === filter);
			const color = active ? 'info' : 'outline-secondary';

			return <Button
						color={color}
						key={name}
						onClick={() => onUpdateFilter(name)}>
							{label}
					</Button>
		});

		return(
			<div className='btn-group'>
				{buttons}
			</div>
		);
	}
}