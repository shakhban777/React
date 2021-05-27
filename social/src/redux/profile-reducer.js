import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
   posts: [
      {id: 1, message: 'Hello my friend!', likeCounts: 5},
      {id: 2, message: 'How are you?', likeCounts: 13}
   ],
   profile: null,
   status: ''
};

const profileReducer = (state = initialState, action) => {
   switch (action.type) {

      case ADD_POST: {
         const likeValue = Math.floor(Math.random() * 100 + 1);
         let text;

         if (action.addNewPostBody) {
            text = action.addNewPostBody;
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
            }]
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

export const addPostActionCreator = (addNewPostBody) => ({type: ADD_POST, addNewPostBody});
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

export default profileReducer;