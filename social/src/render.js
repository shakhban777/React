import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {addPost, updateNewPostText} from "./redux/state";

export const rerenderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
		</React.StrictMode>,
		document.getElementById('root')
	);
};

