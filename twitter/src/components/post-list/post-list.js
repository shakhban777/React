import React from 'react';
import { ListGroup } from 'reactstrap';
import PostListItem from "../post-list-item";

import './post-list.css';

const PostList = ({posts, deleteItem}) => {

	const elements = posts.map((item) => {
		const {id, ...itemProps} = item;

		return(
			<li key={id} className='list-group-item'>
				<PostListItem
					{...itemProps}
					onDelete = {() => deleteItem(id) }/>
			</li>
		)
	})

	return (
		<ListGroup className='app-list'>
			{elements}
		</ListGroup>
	)
}

export default PostList;