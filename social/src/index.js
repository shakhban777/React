import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from "react-redux";

const rerenderEntireTree = () => {
   ReactDOM.render(
      <React.StrictMode>
         <Provider store={store}>
            <App/>
         </Provider>
      </React.StrictMode>,
      document.getElementById('root')
   );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
   const state = store.getState();
   rerenderEntireTree(state);
});

