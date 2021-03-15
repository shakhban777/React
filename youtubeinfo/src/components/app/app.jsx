import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import Results from "../result/results";
import Search from "../search/search";
import './app.scss';
import YoutubeService from "../../services/youtube-service";

export default class App extends Component {

   youtubeService = new YoutubeService();

   state = {
      value: '',
      search: '',
      items: []
   };

   componentDidMount() {
      this.updateItems();
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevState.search !== this.state.search) {
         this.updateItems();
      }
   }

   updateItems() {
      const {getItems, addViews, sortItems} = this.youtubeService;
      const {search} = this.state;

      if (!search) return;

      (async () => {
         const data = await getItems(search);
         const items = await addViews(data);
         const sorted = await sortItems(items);
         await this.setState({items: sorted});
      })()
   }

   onChange = (e) => {
      this.setState({value: e.target.value});
   }

   onSubmit = (e) => {
      e.preventDefault();
      if (!this.state.value) return
      this.setState({search: this.state.value});
      this.setState({value: ''});
   }

   render() {
      const {items, value, search} = this.state;

      const results = search
         ? <Results items={items} search={search}/>
         : null;

      return (
         <div className='container app'>
            <Jumbotron>
               <Search value={value} onChange={this.onChange} onSubmit={this.onSubmit}/>
               {results}
            </Jumbotron>
         </div>
      );
   }
};