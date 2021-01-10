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
		],
		find: ''
	}

	createElement(label) {
		return ({
			label,
			important: false,
			like: false,
			id: this.maxId++
		});
	};

	onAddItem = (text) => {
		if (!text) return;

		const newArr = [...this.state.data, this.createElement(text)];
		this.setState(() => ({
			data: newArr
		}));
	};

	onDeleteItem = (id) => {
		const index = this.state.data.findIndex(el => el.id === id);

		const newArray = [...this.state.data.slice(0, index), ...this.state.data.slice(index + 1)];

		this.setState(() => ({
			data: newArray
		}));
	};

	onToggle = (arr, id, prop) => {
		const index = arr.findIndex(el => el.id === id);

		const old = arr[index];
		const newItem = {
			...old,
			[prop]: !old[prop]
		};

		return [
			...arr.slice(0, index),
			newItem,
			...arr.slice(index + 1)
		];
	};

	onToggleLiked = (id) => {
		this.setState(({ data }) => {
			return {
				data: this.onToggle(data, id, 'like')
			};
		});
	};

	onToggleImportant = (id) => {
		this.setState(({ data }) => {
			return {
				data: this.onToggle(data, id, 'important')
			};
		});
	};

	onSearch = (e) => {
		this.setState(({ find }) => {
			return {
				find: e.target.value
			};
		});
	}

	render() {
		const { data, find } = this.state;
		const liked = data.filter(el => el.like).length;
		const all = data.length;

		const visibleItems = data.filter(el => el.label.toLowerCase().includes(find.toLowerCase()));

		return (
			<AppBlock>
				<AppHeader liked={liked}
							  all={all} />
				<div className='search-panel d-flex'>
					<SearchPanel onSearch={this.onSearch} />
					<PostStatusFilter />
				</div>
				<PostList posts={visibleItems}
							 onDeleteItem={this.onDeleteItem}
							 onToggleImportant={this.onToggleImportant}
							 onToggleLiked={this.onToggleLiked} />
				<PostAddForm onAddItem={this.onAddItem} />
			</AppBlock>
		);
	};
}