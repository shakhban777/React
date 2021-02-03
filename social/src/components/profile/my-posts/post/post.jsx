import React from 'react';

import s from './post.module.css';

const Post = () => {
	return (
		<div className={s.item}>
			<p>Post 1</p>
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimLnVjQAjno1Ycj3bPmsYIuT-2Cc7iX1Hhg&usqp=CAU" alt="" />
		</div>
	);
};

export default Post;