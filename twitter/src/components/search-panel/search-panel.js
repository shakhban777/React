import React from 'react';

import './search-panel.css';

const SearchPanel = ({ onSearch }) => {
	return (
		<input
			className='form-control search-input'
			type='text'
			placeholder='Поиск по записям'
			onChange={ onSearch } />
	);
}

export default SearchPanel;