const initialState = {
   users: [
      {id: 1, fullName: 'Hasan', userPhotoUrl: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg', followed: true},
      {id: 2, fullName: 'Shakhru', userPhotoUrl: 'https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg', followed: true},
      {id: 3, fullName: 'Airat', userPhotoUrl: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD-%D1%81%D0%B5%D1%80%D1%8C%D0%B5%D0%B7%D0%BD%D1%8B%D0%B5-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-%D1%84%D0%BE%D1%82%D0%BE-029.jpg',  followed: true},
      {id: 4, fullName: 'Rinaz'},
      {id: 5, fullName: 'Shakhban', userPhotoUrl: 'https://avatars.githubusercontent.com/u/64259612?s=400&u=836befa4869459ce2532b2426fe8e365003ecf3b&v=4', followed: true},
      {id: 6, fullName: 'No Name'},
      {id: 7, fullName: 'Kitty', userPhotoUrl: 'https://www.purina.ru/sites/purina.ru/files/2018-07/%D0%B1%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D0%BA%D0%BE%D1%88%D0%BA%D0%B0.jpg'},
   ]
};

const sidebarReducer = (state = initialState, action) => {
   return state;
};

export default sidebarReducer;