import Dialogs from "./dialogs";
import {addMessageActionCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
   return {
      state: state.dialogsPage
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

const AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
