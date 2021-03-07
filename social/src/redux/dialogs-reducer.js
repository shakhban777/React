const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
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
      {id: 4, name: 'Morgan'},
      {id: 5, name: 'Hasan'}
   ]
};

const dialogsReducer = (state = initialState, action) => {

   switch (action.type) {
      case UPDATE_NEW_MESSAGE_TEXT:
         return {
            ...state,
            newMessageText: action.newText
         };

      case ADD_MESSAGE:
         return {
            ...state,
            newMessageText: '',
            messages: [...state.messages, { id: ++state.messages.length, message: state.newMessageText }]
         };

      default:
         return state;
   }
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextCreator = (text) =>
   ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;