import {rerenderEntireTree} from "../render";

const state = {
   profilePage: {
      id: 2,
      posts: [
         {id: 1, message: 'Hello my friend!', likeCounts: 5},
         {id: 2, message: 'How are you?', likeCounts: 13}
      ],
      newPostText: ''
   },
   dialogsPage: {
      mid: 3,
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
         {id: 4, name: 'Freeman'},
         {id: 5, name: 'Bel'}
      ]
   },
   sidebar: {
      users: [
         {id: 1, name: 'Hasan', img: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg', isFriend: true},
         {id: 2, name: 'Shakhru', img: 'https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg', isFriend: true},
         {id: 3, name: 'Airat', img: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD-%D1%81%D0%B5%D1%80%D1%8C%D0%B5%D0%B7%D0%BD%D1%8B%D0%B5-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-%D1%84%D0%BE%D1%82%D0%BE-029.jpg'},
         {id: 4, name: 'Rinaz', isFriend: true},
         {id: 5, name: 'Shakhban', img: 'https://avatars.githubusercontent.com/u/64259612?s=400&u=836befa4869459ce2532b2426fe8e365003ecf3b&v=4', isFriend: true},
         {id: 6, name: 'No Name'},
         {id: 7, name: 'Kitty', img: 'https://www.purina.ru/sites/purina.ru/files/2018-07/%D0%B1%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D0%BA%D0%BE%D1%88%D0%BA%D0%B0.jpg'},
      ]
   }
}

export const addMessage = () => {
   if (!state.dialogsPage.newMessageText) return;

   state.dialogsPage.messages.push(
      {
         id: ++state.dialogsPage.mid,
         message: state.dialogsPage.newMessageText
      }
   );

   state.dialogsPage.newMessageText = '';
   rerenderEntireTree(state);
};

export const updateNewMessageText = (newText) => {
   state.dialogsPage.newMessageText = newText;
   rerenderEntireTree(state);
};

export const addPost = () => {

   if (!state.profilePage.newPostText) return;

   let likeValue = Math.floor(Math.random() * 100 + 1);

   state.profilePage.posts.push(
      {
         id: ++state.profilePage.id,
         message: state.profilePage.newPostText,
         likeCounts: likeValue
      }
   );

   state.profilePage.newPostText = '';
   rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
   state.profilePage.newPostText = newText;
   rerenderEntireTree(state);
};

export default state;