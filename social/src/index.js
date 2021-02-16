import store from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const rerenderEntireTree = (state) => {
   ReactDOM.render(
      <React.StrictMode>
         <App
            state={state}
            addPost={store.addPost.bind(store)}
            updateNewPostText={store.updateNewPostText.bind(store)}
            addMessage={store.addMessage.bind(store)}
            updateNewMessageText={store.updateNewMessageText.bind(store)}/>
      </React.StrictMode>,
      document.getElementById('root')
   );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
