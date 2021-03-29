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

export default authReducer;