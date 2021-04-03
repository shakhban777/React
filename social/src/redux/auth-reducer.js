import {authAPI, profileAPI} from "../api/api";
import DefaultPhoto from "../assets/images/user.png";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
   userId: null,
   email: null,
   login: null,
   avatar: null,
   isAuth: false
};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.data,
            isAuth: true
         };

      default:
         return state;
   }
};

export const setAuthUserData = (email, userId, login, avatar) => ({type: SET_USER_DATA, data: {email, userId, login, avatar}});

export const showAuthedPerson = () => {
   return (dispatch) => {
      authAPI.getAuthData()
         .then(data => {
            if (data.resultCode === 0) {
               const {email, id, login} = data.data;
               profileAPI.getProfile(`${id}`)
                  .then(secData => {
                     let avatar = secData.photos.small;
                     if (!avatar) {
                        avatar = DefaultPhoto;
                     }
                     dispatch(setAuthUserData(email, id, login, avatar));
                  })
            }
         });
   };
};

export default authReducer;