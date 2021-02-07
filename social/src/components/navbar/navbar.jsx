import React from 'react';
import {NavLink} from "react-router-dom";

import s from './navbar.module.css';

const Navbar = () => {
	return (
		<nav className={s.nav}>
			<ul>
				<li className={s.item}>
					<NavLink activeClassName={s.active} to='/profile/'>Profile</NavLink>
				</li>
				<li className={s.item}>
					<NavLink activeClassName={s.active} to='/dialogs/'>Messages</NavLink>
				</li>
				<li className={s.item}>
					<NavLink activeClassName={s.active} to='/news/'>News</NavLink>
				</li>
				<li className={s.item}>
					<NavLink activeClassName={s.active} to='/movies/'>Movies</NavLink>
				</li>
				<li className={s.item}>
					<NavLink activeClassName={s.active} to='/settings/'>Settings</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;