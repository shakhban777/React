import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import Results from "../result/results";
import Search from "../search/search";
import YoutubeService from "../../services/youtube-service";
import ErrorIndicator from "../error-indicator";
import './app.scss';

export default class App extends Component {

   youtubeService = new YoutubeService();

   state = {
      value: '',
      search: '',
      loading: true,
      hasError: false,
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

   componentDidCatch(error, errorInfo) {
      this.setState({ hasError: true });
   }

   updateItems() {
      const {getItems, addViews, sortItems} = this.youtubeService;
      const {search} = this.state;

      this.setState({
         loading: true,
      });

      if (!search) return;

      (async () => {
         try {
            const data = await getItems(search);
            const items = await addViews(data);
            const sorted = await sortItems(items);
            await this.setState({items: sorted, loading: false});
         } catch (err) {
            await this.setState({loading: false, hasError: true});
            console.error(err);
         }
      })()
   }

   onChange = (e) => {
      this.setState({value: e.target.value});
   }

   onSubmit = (e) => {
      e.preventDefault();
      if (!this.state.value) return
      this.setState({search: this.state.value});
      this.setState({value: '', items: []});
   }

   render() {
      const {items, value, search, loading, hasError} = this.state;

      if (hasError) {
         return <ErrorIndicator/>
      }

      const results = search
         ? <Results items={items} search={search} loading={loading}/>
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