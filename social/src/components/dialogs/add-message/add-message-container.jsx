import React from 'react';
import {addMessageActionCreator, updateNewMessageTextCreator} from "../../../redux/dialogs-reducer";
import AddMessage from "./add-message";

const AddMessageContainer = ({newMessageText, dispatch}) => {

   const sendMessage = () => {
      dispatch(addMessageActionCreator());
   }

   const updateMessage = (text) => {
      dispatch(updateNewMessageTextCreator(text));
   }

   return <AddMessage newMessageText={newMessageText} sendMessage={sendMessage} updateMessage={updateMessage}/>;
};

export default AddMessageContainer;