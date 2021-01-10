import React from 'react';

import styled from "styled-components";
import './app-header.css';

const Header = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	h1 {
		font-size: 26px;
		color: ${props => props.colored ? '#405060' : 'black'};
		:hover {
			color: #4691dd;
		}
	}
	h2 {
		font-size: 1.2rem;
		color: grey;
	}
`

const AppHeader = ({all, liked}) => {
	return (
		<Header as='div' colored>
			<h1>Shakhban Magomedov</h1>
			<h2>{all} записей, из них понравилось {liked}</h2>
		</Header>
	)
}

export default AppHeader;