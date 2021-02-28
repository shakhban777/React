import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import StoreContext from "./store-context";

const rerenderEntireTree = () => {
   ReactDOM.render(
      <React.StrictMode>
         <StoreContext.Provider value={store}>
            <App/>
         </StoreContext.Provider>
      </React.StrictMode>,
      document.getElementById('root')
   );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
   const state = store.getState();
   rerenderEntireTree(state);
});
