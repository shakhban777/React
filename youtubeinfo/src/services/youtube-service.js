export default class YoutubeService {

   _maxResults = 10;
   _orderBy = 'date';
   _baseSearchURL = 'https://youtube.googleapis.com/youtube/v3/search?';
   _baseStatisticURL = 'https://www.googleapis.com/youtube/v3/videos?';
   _apiKey = 'AIzaSyAZ9HXwcvjwkjV3mUA6z4JHlU-ASd1uy2g';

   getResource = async (search) => {
      const urlToFetch = `${this._baseSearchURL}part=snippet&maxResults=${this._maxResults}&order=${this._orderBy}&q=${search}&key=${this._apiKey}`;
      const response = await fetch(urlToFetch);

      if (!response.ok) {
         throw new Error(`Could not fetch ${urlToFetch}, received ${response.status}`);
      }

      return await response.json();
   }

   getItems = async (search) => {
      try {
         const data = await this.getResource(search);
         const items = data.items.map(item => {
            // eslint-disable-next-line array-callback-return
            if (item.snippet.channelTitle === item.snippet.title) return;      // because youtube API returns user profiles sometime
            return this._transformItem(item);
         });

         return items.filter(function (el) {     // remove undefined results
            return el != null;
         });
      } catch (err) {
         console.error(err);
      }
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
      try {
         const viewedItems = await array.map(item => {
            const urlToFetch = `${this._baseStatisticURL}part=statistics&id=${item.videoId}&key=${this._apiKey}`
            return (async () => {
               const response = await fetch(urlToFetch);

               if (!response.ok) {
                  throw new Error(`Could not fetch ${urlToFetch}, received ${response.status}`);
               }

               const data = await response.json();
               const view = await data.items[0].statistics.viewCount;
               return {...item, views: view};
            })()
         });

         return Promise.all(viewedItems)
            .then(item => item)
            .catch(err => console.error(err));
      } catch (err) {
         console.error(err);
      }
   }

   sortItems(items) {
      return items.sort(function (a, b) {
         return b.views - a.views;
      });
   }
}