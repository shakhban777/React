import Dialogs from "./dialogs";
import {addMessageActionCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";

/* const newMessageText = state.dialogsPage.newMessageText;
               return <Dialogs
                  state={state}
                  newMessageText={newMessageText}/>;*/

const mapStateToProps = (state) => {
   return {
      state: state.dialogsPage,
      users: state.sidebar.users
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      sendMessage: () => {
         dispatch(addMessageActionCreator());
      },
      updateMessage: (text) => {
         dispatch(updateNewMessageTextCreator(text));
      }
   };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
