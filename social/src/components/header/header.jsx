import React from 'react';
import {NavLink} from "react-router-dom";

import s from './header.module.css';

const Header = () => {
	return (
		<header className={s.header}>
			<NavLink className={s.flex} to='/'>
				<img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="logo" />
				<span>FreeDOM</span>
			</NavLink>
		</header>
	);
};

export default Header;