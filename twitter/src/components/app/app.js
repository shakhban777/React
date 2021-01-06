import React from 'react';

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
const StyledAppBlock = styled(AppBlock)`
	background-color: grey;
`

const App = () => {

	const data = [
		{label: 'Hi everyone', important: true, id: 'qwe'},
		{label: "I'm beginner React programmer", important: false, id: 'asd'},
		{label: "Let's go to study it together!", important: false, id: 'zxc'}
	]

	return (
		<AppBlock>
			<AppHeader/>
			<div className='search-panel d-flex'>
				<SearchPanel/>
				<PostStatusFilter/>
			</div>
			<PostList posts={data}/>
			<PostAddForm/>
		</AppBlock>
	)
}

export default App;