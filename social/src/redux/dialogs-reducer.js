const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
   messages: [
      {id: 1, message: "Hello, how are you?"},
      {id: 2, message: "I'm fine, thanks!", incoming: true},
      {id: 3, message: "What are you doing tonight?"}
   ],
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
      case ADD_MESSAGE:
         return {
            ...state,
            messages: [...state.messages, { id: ++state.messages.length, message: action.newMessageBody }]
         };

      default:
         return state;
   }
};

export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});

export default dialogsReducer;