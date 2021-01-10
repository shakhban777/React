import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {
	state = {
		find: ''
	};

	onUpdateSearch = (e) => {
		const find = e.target.value;
		this.setState({ find });
		this.props.onUpdateSearch(find);
	}

	render() {
		return (
			<input
				className='form-control search-input'
				type='text'
				placeholder='Поиск по записям'
				value={this.state.find}
				onChange={this.onUpdateSearch}/>
		);
	}
}