const state = {
   profilePage: {
      posts: [
         {id: 1, message: 'Hello my friend!', likeCounts: 5},
         {id: 2, message: 'How are you?', likeCounts: 13}
      ]

   },
   dialogsPage: {
      messages: [
         {id: 1, message: "Hello, how are you?"},
         {id: 2, message: "I'm fine, thanks!"},
         {id: 3, message: "What are you doing tonight?"}
      ],
      dialogs: [
         {id: 1, name: 'Shakhban'},
         {id: 2, name: 'Shakhru'},
         {id: 3, name: 'Kitty'},
         {id: 4, name: 'Freeman'},
         {id: 5, name: 'Bel'}
      ]
   },
   sidebar: {
      friends: [
         {name: 'Hasan', img: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'},
         {name: 'Shakhru', img: 'https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg'},
         {name: 'Airat', img: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD-%D1%81%D0%B5%D1%80%D1%8C%D0%B5%D0%B7%D0%BD%D1%8B%D0%B5-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-%D1%84%D0%BE%D1%82%D0%BE-029.jpg'}
      ]
   }
}

export default state;