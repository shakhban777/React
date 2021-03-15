export default class YoutubeService {

   _maxResults = 10;
   _orderBy = 'date';
   _baseSearchURL = 'https://youtube.googleapis.com/youtube/v3/search?';
   _baseStatisticURL = 'https://www.googleapis.com/youtube/v3/videos?';
   _apiKey = 'AIzaSyCE0dzixVi2ek9d0gwwUT7pllRxgaWrXS0';

   getResource = async (search) => {
      const response =
         await fetch(`${this._baseSearchURL}part=snippet&maxResults=${this._maxResults}&order=${this._orderBy}&q=${search}&key=${this._apiKey}`);

      if (!response.ok) {
         throw new Error(`Could not fetch 
            ${this._baseSearchURL}part=snippet&maxResults=${this._maxResults}&order=${this._orderBy}&q=${search}&key=${this._apiKey},
            received ${response.status}`);
      }

      return await response.json();
   }

   getItems = async (search) => {
      const data = await this.getResource(search);
      return data.items.map(item => {
         return this._transformItem(item);
      });
   }

   _transformItem = (item) => {
      return {
         id: item.etag,
         videoId: item.id.videoId,
         date: item.snippet.publishTime,
         videoName: item.snippet.title,
         author: item.snippet.channelTitle,
      }
   }

   addViews = async (array) => {
      const viewedItems = await array.map(item => {
         return (async () => {
            const response = await fetch(`${this._baseStatisticURL}part=statistics&id=${item.videoId}&key=${this._apiKey}`);
            const data = await response.json();
            const view = await data.items[0].statistics.viewCount;
            return {...item, views: view};
         })()
      });

      return Promise.all(viewedItems)
         .then(item => item);
   }

   sortItems(items) {
      return items.sort(function (a, b) {
         return b.views - a.views;
      });
   }
}