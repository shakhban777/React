import React from 'react';
import Dialogs from "./dialogs";
import StoreContext from "../../store-context";

const DialogsContainer = () => {
   return (
      <StoreContext.Consumer>
         {
            (store) => {
               const state = store.getState();
               return <Dialogs state={state} store={store}/>;
            }
         }
      </StoreContext.Consumer>
   )
};

export default DialogsContainer;
