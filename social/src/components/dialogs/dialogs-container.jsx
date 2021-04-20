import Dialogs from "./dialogs";
import {addMessageActionCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

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

export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect
)(Dialogs);
