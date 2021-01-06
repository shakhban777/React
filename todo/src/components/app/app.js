import React, {Component} from 'react';

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
			{ id: 1, label: 'Drink Coffee', important: false },
			{ id: 2, label: 'Create Awesome App', important: true },
			{ id: 3, label: 'To have a lunch', important: false },
		]
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
		const newItem = {
			label: text,
			important: false,
			id: this.maxId++
		}

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

	render() {
		return (
			<div className='todo-app'>
				<AppHeader toDo={1} done={3} />
				<div className="top-panel d-flex">
					<SearchPanel />
					<ItemStatusFilter />
				</div>

				<TodoList
					todos={ this.state.todoData }
					onDeleted={ this.deleteItem } />
				<ItemAddForm
					onItemAdded={this.addItem}/>
			</div>
		);
	}

};