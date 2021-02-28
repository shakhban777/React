import React from 'react';
import Dialogs from "./dialogs";

const DialogsContainer = (props) => {
   const state = props.store.getState();

   return <Dialogs state={state} store={props.store}/>;
};

export default DialogsContainer;
