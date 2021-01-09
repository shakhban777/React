import React, { Component } from 'react';

import AppHeader from "../app-header/";
import SearchPanel from '../search-panel';
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css';
import styled from "styled-components";

const AppBlock = styled.div`
	margin: 0 auto;
	max-width: 800px;
`
// const StyledAppBlock = styled(AppBlock)`
// 	background-color: grey;
// `

export default class App extends Component {
	maxId = 100

	state = {
		data: [
			this.createElement('Hi everyone'),
			this.createElement("I'm beginner React programmer"),
			this.createElement("Let's go to study it together!")
		]
	}

	onDeleteItem = (id) => {
		const index = this.state.data.findIndex(el => el.id === id);

		const newArray = [...this.state.data.slice(0, index), ...this.state.data.slice(index + 1)];

		this.setState(() => ({
			data: newArray
		}));
	};

	createElement(label) {
		return ({
			label,
			important: false,
			id: this.maxId++
		});
	};

	onAddItem = (text) => {
		const newArr = [...this.state.data, this.createElement(text)];
		this.setState(() => ({
			data: newArr
		}));
	};

	render() {
		const { data } = this.state;

		return (
			<AppBlock>
				<AppHeader />
				<div className='search-panel d-flex'>
					<SearchPanel />
					<PostStatusFilter />
				</div>
				<PostList posts={data}
							 onDeleteItem={this.onDeleteItem} />
				<PostAddForm onAddItem={this.onAddItem} />
			</AppBlock>
		);
	};
}