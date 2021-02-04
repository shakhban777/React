import React from 'react';

import s from './post.module.css';

const Post = ({message, likeCounts}) => {
	return (
		<div className={s.item}>
			{message}
			<span className={s.like}>❤ {likeCounts}</span>
		</div>
	);
};

export default Post;