const initialState = {
   users: [
      {id: 1, name: 'Hasan', img: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg', isFriend: true},
      {id: 2, name: 'Shakhru', img: 'https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg', isFriend: true},
      {id: 3, name: 'Airat', isFriend: true},
      {id: 4, name: 'Rinaz'},
      {id: 5, name: 'Shakhban', img: 'https://avatars.githubusercontent.com/u/64259612?s=400&u=836befa4869459ce2532b2426fe8e365003ecf3b&v=4', isFriend: true},
      {id: 6, name: 'No Name'},
      {id: 7, name: 'Kitty', img: 'https://www.purina.ru/sites/purina.ru/files/2018-07/%D0%B1%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D0%BA%D0%BE%D1%88%D0%BA%D0%B0.jpg'},
   ]
};

const sidebarReducer = (state = initialState, action) => {
   return state;
};

export default sidebarReducer;