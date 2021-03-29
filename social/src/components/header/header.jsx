import React from 'react';
import {NavLink} from "react-router-dom";

import s from './header.module.css';

const Header = (props) => {
	return (
		<header className={s.header}>
			<NavLink className={s.flex} to={'/'}>
				<img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="logo" />
				<span>FreeDOM</span>
			</NavLink>
			<div>
				{props.isAuth
               ? (
                  <div className={s.loginBlock}>
							<div>
								<img src={props.avatar} alt="avatar"/>
							</div>
							<div>
								<div>Имя: {props.login}</div>
								<div>E-mail: {props.email}</div>
							</div>
                  </div>
               )
					: <NavLink to={'/login'}> Login </NavLink>}
			</div>
		</header>
	);
};

export default Header;