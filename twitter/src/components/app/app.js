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

	state = {
		data: [
			{label: 'Hi everyone', important: true, id: 1},
			{label: "I'm beginner React programmer", important: false, id: 2},
			{label: "Let's go to study it together!", important: false, id: 3}
		],
		maxId: 100
	}


	deleteItem = (id) => {
		const index = this.state.data.findIndex(el => el.id === id);

		const newArray = [...this.state.data.slice(0, index), ...this.state.data.slice(index + 1)];

		this.setState(({ data }) => ({
			data: newArray
		}));
	};

	render() {
		const { data } = this.state;
		return (
			<AppBlock>
				<AppHeader/>
				<div className='search-panel d-flex'>
					<SearchPanel/>
					<PostStatusFilter/>
				</div>
				<PostList posts={ data }
							 deleteItem={ this.deleteItem }/>
				<PostAddForm/>
			</AppBlock>
		);
	};
}