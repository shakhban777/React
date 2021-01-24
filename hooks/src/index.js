import React, { useState, useEffect, Component } from 'react';
import ReactDOM from 'react-dom';

const App = () => {

	const [ value, setValue ] = useState(0);
	const [ visible, setVisible ] = useState(true);

	if (visible) {
		return (
			<div>
				<button
					onClick={() => setValue((s) => s + 1)}>+</button>
				<button
					onClick={() => setVisible(false)}>hide</button>
				<HookCounter value={value}/>
				<ClassCounter value={value}/>
			</div>
		);
	} else {
		return <button
			onClick={() => setVisible(true)}>show</button>
	}
};

const HookCounter = ({value}) => {

	useEffect(() => {
		console.log('use effect');
		return () => {console.log('clear')};
	}, [value])

	return <p> {value} </p>;
}

class ClassCounter extends Component {

	componentDidMount() {
		console.log('class: mount');
	}

	componentDidUpdate(props) {
		console.log('class: update');
	}

	componentWillUnmount() {
		console.log('class: unmount');
	}

	render() {
		return <p> {this.props.value} </p>;
	}
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
