import React from 'react';
import Dialogs from "./dialogs";
import StoreContext from "../../store-context";
import {addMessageActionCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";

const DialogsContainer = () => {
   return (
      <StoreContext.Consumer>
         {
            (store) => {
               const state = store.getState();
               const dispatch = store.dispatch;
               const newMessageText = state.dialogsPage.newMessageText;

               const sendMessage = () => {
                  dispatch(addMessageActionCreator());
               }

               const updateMessage = (text) => {
                  dispatch(updateNewMessageTextCreator(text));
               }

               return <Dialogs
                  state={state}
                  newMessageText={newMessageText}
                  sendMessage={sendMessage}
                  updateMessage={updateMessage}/>;
            }
         }
      </StoreContext.Consumer>
   )
};

export default DialogsContainer;
