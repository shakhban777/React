const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

   switch (action.type) {
      case ADD_MESSAGE:
         if (!state.newMessageText) return;

         state.messages.push(
            {
               id: ++state.mid,
               message: state.newMessageText
            }
         );

         state.newMessageText = '';
         break;

      case UPDATE_NEW_MESSAGE_TEXT:
         state.newMessageText = action.newText;
         break;

      default:
         console.log('You entered unreal action type!');
         break;
   }

   return state;
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextCreator = (text) =>
   ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;