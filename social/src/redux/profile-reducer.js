const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
   switch (action.type) {
      case ADD_POST:
         if (!state.newPostText) return;

         let likeValue = Math.floor(Math.random() * 100 + 1);

        state.posts.push(
            {
               id: ++state.id,
               message: state.newPostText,
               likeCounts: likeValue
            }
         );
         state.newPostText = '';
         break;

      case UPDATE_NEW_POST_CHANGE:
         state.newPostText = action.newText;
         break;

      default:
         console.log('You entered unreal action type!');
         break;
   }

   return state;
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const onPostChangeActionCreator = (text) =>
   ({type: UPDATE_NEW_POST_CHANGE, newText: text});

export default profileReducer;