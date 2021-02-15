import state, {addMessage, addPost, subscribe, updateNewMessageText, updateNewPostText} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const rerenderEntireTree = (state) => {
   ReactDOM.render(
      <React.StrictMode>
         <App
            state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
            addMessage={addMessage}
            updateNewMessageText={updateNewMessageText}/>
      </React.StrictMode>,
      document.getElementById('root')
   );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
