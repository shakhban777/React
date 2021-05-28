import React from 'react';
import DialogItem from "./dialog-item/dialog-item";
import Message from "./message/message";
import {Field, reduxForm} from 'redux-form';
import s from './dialogs.module.css';
import {Textarea} from "../common/form-controls/form-controls";
import {maxLengthCreator, required} from "../../utilities/validators/validators";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
   return (
      <>
         <form onSubmit={props.handleSubmit} className={s.addMessage}>
            <Field
               component={Textarea}
               validate={[required, maxLength50]}
               className={s.textArea}
               name={'newMessageBody'}
               placeholder='Enter your message'/>
            <button className={s.sendButton}>Send message</button>
         </form>
      </>
   );
};

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

const Dialogs = (props) => {
   const dialogsElements = props.state.dialogs
      .map(dialog => {
         const {id, ...props} = dialog;
         return <DialogItem key={id} id={id} {...props} />;
      });

   const messagesElements = props.state.messages
      .map(message => {
         const {id, ...props} = message;
         return <Message key={id} {...props} />;
      });

   const addNewMessage = (values) => {
      props.sendMessage(values.newMessageBody);
   };

   return (
      <div className={s.dialogs}>
         <ul className={s.dialogsItems}>
            {dialogsElements}
         </ul>

         <div className={s.messages}>
            <ul className={s.messagesList}>
               {messagesElements}
            </ul>
            <AddMessageReduxForm onSubmit={addNewMessage}/>
         </div>
      </div>
   );
};

export default Dialogs;
