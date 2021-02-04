import React from 'react';

import s from './header.module.css';

const Header = () => {
	return (
		<header className={s.header}>
			<img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="logo" />
			<span>FreeDOM</span>
		</header>
	);
};

export default Header;