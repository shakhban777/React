const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
   mid: 3,
   messages: [
      {id: 1, message: "Hello, how are you?"},
      {id: 2, message: "I'm fine, thanks!", incoming: true},
      {id: 3, message: "What are you doing tonight?"}
   ],
   newMessageText: '',
   dialogs: [
      {id: 1, name: 'Shakhban'},
      {id: 2, name: 'Shakhru'},
      {id: 3, name: 'Kitty'},
      {id: 4, name: 'Freeman'},
      {id: 5, name: 'Bel'}
   ]
};

const dialogsReducer = (state = initialState, action) => {

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