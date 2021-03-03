const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-TEXT';

const initialState = {
   id: 2,
   posts: [
      {id: 1, message: 'Hello my friend!', likeCounts: 5},
      {id: 2, message: 'How are you?', likeCounts: 13}
   ],
   newPostText: ''
};

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         const stateCopy = {...state};
         const likeValue = Math.floor(Math.random() * 100 + 1);

         if (!stateCopy.newPostText) return;

         stateCopy.posts = [...state.posts];

         stateCopy.posts.push(
            {
               id: ++stateCopy.id,
               message: stateCopy.newPostText,
               likeCounts: likeValue
            }
         );
         stateCopy.newPostText = '';
         return stateCopy;
      }

      case UPDATE_NEW_POST_CHANGE:
         const stateCopy = {...state};

         stateCopy.newPostText = action.newText;
         return stateCopy;

      default:
         console.log('You entered unreal action type!');
         return state;
   }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const onPostChangeActionCreator = (text) =>
   ({type: UPDATE_NEW_POST_CHANGE, newText: text});

export default profileReducer;