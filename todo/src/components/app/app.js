import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

	maxId = 100;

	state = {
		todoData: [
			this.createTodoItem('Drink Coffee'),
			this.createTodoItem('Create Awesome App'),
			this.createTodoItem('To have a lunch')
		],
		term: '',
		filter: 'all'
	};

	createTodoItem(label) {
		return {
			label,
			done: false,
			important: false,
			id: this.maxId++
		};
	};

	deleteItem = (id) => {
		this.setState(({ todoData }) => {
			const idx = todoData.findIndex((el) => el.id === id);

			const newArray = [
				...todoData.slice(0, idx),
				...todoData.slice(idx + 1)
			];

			return {
				todoData: newArray
			};
		});
	};

	addItem = (text) => {
		const newItem = this.createTodoItem(text);

		this.setState(({ todoData }) => {
			const newArr = [
				...todoData,
				newItem
			];

			return {
				todoData: newArr
			}
		});
	};

	toggleProperty = (arr, id, propName) => {
		const idx = arr.findIndex((el) => el.id === id);

		const oldItem = arr[idx];
		const newItem = {
			...oldItem,
			[propName]: !oldItem[propName]
		};

		return [
			...arr.slice(0, idx),
			newItem,
			...arr.slice(idx + 1)
		];
	};

	onToggleDone = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'done')
			}
		});
	};

	onToggleImportant = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'important')
			}
		});
	};

	onSearchChange = (term) => {
		this.setState({ term });
	}

	serch(items, term) {
		if (term.length === 0) {
			return items;
		}
		return items.filter((el) => el.label.toLowerCase().includes(term.toLowerCase()));
	};

	filter(items, filter) {
		switch (filter) {
			case 'all':
				return items;
			case 'active':
				return items.filter((el) => !el.done);
			case 'done':
				return items.filter((el) => el.done);
			default:
				return items;
		};
	};

	onFilterChange = (filter) => {
		this.setState({ filter });
	};

	render() {
		const { todoData, term, filter } = this.state;

		const visibleItems = this.filter(this.serch(todoData, term), filter);
		const doneCount = todoData.filter((el) => el.done).length;
		const todoCount = todoData.length - doneCount;

		return (
			<div className='todo-app'>
				<AppHeader toDo={todoCount} done={doneCount} />
				<div className="top-panel d-flex">
					<SearchPanel
						onSearchChange={this.onSearchChange}/>
					<ItemStatusFilter filter={filter}
						onFilterChange={this.onFilterChange}/>
				</div>

				<TodoList
					todos={visibleItems}
					onDeleted={this.deleteItem}
					onToggleDone={this.onToggleDone}
					onToggleImportant={this.onToggleImportant} />
				<ItemAddForm
					onItemAdded={this.addItem} />
			</div>
		);
	};
};