const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
   posts: [
      {id: 1, message: 'Hello my friend!', likeCounts: 5},
      {id: 2, message: 'How are you?', likeCounts: 13}
   ],
   newPostText: '',
   profile: null
};

const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case UPDATE_NEW_POST_CHANGE:
         return {
            ...state,
            newPostText: action.newText
         };

      case ADD_POST: {
         const likeValue = Math.floor(Math.random() * 100 + 1);
         let text;

         if (state.newPostText) {
            text = state.newPostText;
         } else {
            return {
               ...state
            }
         }

         return {
            ...state,
            posts: [...state.posts, {
               id: ++state.posts.length,
               message: text,
               likeCounts: likeValue
            }],
            newPostText: ''
         };
      }

      case SET_USER_PROFILE: {
         return {
            ...state,
            profile: action.profile
         }
      }

      default:
         return state;
   }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const onPostChangeActionCreator = (text) =>
   ({type: UPDATE_NEW_POST_CHANGE, newText: text});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;