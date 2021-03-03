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
      case ADD_MESSAGE: {
         const stateCopy = {...state};

         if (!stateCopy.newMessageText) return;

         stateCopy.messages = [...state.messages];

         stateCopy.messages.push(
            {
               id: ++stateCopy.mid,
               message: stateCopy.newMessageText
            }
         );

         stateCopy.newMessageText = '';
         return stateCopy;
      }

      case UPDATE_NEW_MESSAGE_TEXT:
         const stateCopy = {...state};
         stateCopy.newMessageText = action.newText;
         return stateCopy;

      default:
         console.log('You entered unreal action type!');
         return state;
   }
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextCreator = (text) =>
   ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;