import React from 'react';

import './preloader.css';

const Preloader = () => {
	return (
		<div className="lds-css">
			<div className="lds-double-ring">
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Preloader;
