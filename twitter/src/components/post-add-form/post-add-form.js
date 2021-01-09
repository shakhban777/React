import React, { Component } from 'react';

import './post-add-form.css';

export default class PostAddForm extends Component {

	state = {
		label: ''
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onAddItem(this.state.label)
		this.setState(() => ({
			label: ''
		}));
	}

	onChange = (e) => {
		const text = e.target.value;
		this.setState(() => ({
			label: text
		}));
	}


	render() {
		const { label } = this.state;

		return(
			<form className='bottom-panel d-flex'
					onSubmit={ this.onSubmit }>
				<input
					type='text'
					placeholder='О чем вы думаете сейчас?'
					className='form-control new-post-label'
					onChange={this.onChange}
					value={ label }/>
				<button
					type='submit'
					className='btn btn-outline-secondary'>
					Добавить</button>
			</form>
		);
	};
}