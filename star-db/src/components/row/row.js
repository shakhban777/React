import React from 'react';

const Row = ({ left, right }) => {
	return (
		<div className="row mb2">
			<div className="col-md-6 mb-2">
				{left}
			</div>
			<div className="col-md-6">
				{right}
			</div>
		</div>
	);
};

export default Row;