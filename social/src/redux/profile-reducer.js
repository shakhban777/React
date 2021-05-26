import {authAPI, profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
   posts: [
      {id: 1, message: 'Hello my friend!', likeCounts: 5},
      {id: 2, message: 'How are you?', likeCounts: 13}
   ],
   newPostText: '',
   profile: null,
   status: ''
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
      case SET_STATUS: {
         return {
            ...state,
            status: action.status
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
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => {
   return (dispatch) => {
      profileAPI.getProfile(userId)
         .then(data => {
            dispatch(setUserProfile(data));
         });
   };
};

export const getStatus = (userId) => {
   return (dispatch) => {
      profileAPI.getStatus(userId)
         .then(data => {
            dispatch(setStatus(data));
         });
   };
};

export const updateStatus = (status) => {
   return (dispatch) => {
      profileAPI.updateStatus(status)
         .then(data => {
            if (data.data.resultCode === 0) {
               dispatch(setStatus(status));
            }
         });
   };
};

// test thunk
export const myProfile = () => {
   return (dispatch) => {
      authAPI.getAuthData()
         .then(data => profileAPI.getProfile(data.data.id))
         .then(data => {
            dispatch(setUserProfile(data));
         });
   };
}

export default profileReducer;