import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {

	const [ value, setValue ] = useState(1);
	const [ visible, setVisible ] = useState(true);

	if (visible) {
		return (
			<div>
				<button
					onClick={() => setValue((s) => s + 1)}>+</button>
				<button
					onClick={() => setVisible(false)}>hide</button>
				<PlanetName id={value}/>
			</div>
		);
	} else {
		return <button
			onClick={() => setVisible(true)}>show</button>
	}
};

const usePlanetInfo = (id) => {
	const [ name, setName ] = useState(null);

	useEffect(() => {
		let cancelled = false;

		fetch(`https://swapi.dev/api/planets/${id}`)
			.then(res => res.json())
			.then(data => !cancelled && setName(data.name));
		return () => cancelled = true;
	}, [id]);

	return name;
};

const PlanetName = ({id}) => {

	const name = usePlanetInfo(id);

	return (
		<div> { id } - { name }</div>
	);
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
