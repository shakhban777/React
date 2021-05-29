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
            ...action.payload
         };

      default:
         return state;
   }
};

export const setAuthUserData = (email, userId, login, avatar, isAuth) => ({
   type: SET_USER_DATA, payload: {email, userId, login, avatar, isAuth}
});

export const getAuthUserData = () => (dispatch) => {
   authAPI.me()
      .then(data => {
         if (data.resultCode === 0) {
            const {email, id, login} = data.data;
            profileAPI.getProfile(`${id}`)
               .then(secData => {
                  let avatar = secData.photos.small;
                  if (!avatar) {
                     avatar = DefaultPhoto;
                  }
                  dispatch(setAuthUserData(email, id, login, avatar, true));
               })
         }
      });
};

export const login = (email, password, rememberMe) => (dispatch) => {
   authAPI.login(email, password, rememberMe)
      .then(data => {
         if (data.resultCode === 0) {
            dispatch(getAuthUserData());
         }
      });
};

export const logout = () => (dispatch) => {
   authAPI.logout()
      .then(data => {
         if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, null, false));
         }
      });
};

export default authReducer;