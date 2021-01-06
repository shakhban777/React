import React from 'react';
import { Button } from "reactstrap";
import './post-status-filter.css';


const PostStatusFilter = () => {
	return(
		<div className='btn-group'>
			<Button color='info'>Все</Button>
			<Button outline color='secondary'>Понравилось</Button>
		</div>
	)
}

export default PostStatusFilter;