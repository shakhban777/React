import React, {Component} from "react";
import Result from "../result/result";
import Buttons from "../buttons/buttons";
import './app.scss';

class App extends Component {
   state = {
      result: 0,
      dotPressed: false
   };

   addNewNumber(num) {
      this.setState({result: num});
   }

   addNumber(num) {
      this.setState({result: this.state.result.toString() + num});
   }

   reverseNum() {
      if (this.state.result.toString().endsWith('.')) {
         this.setState({dotPressed: false});
      }
      this.setState({result: -this.state.result});
   }

   addDot(num) {
      if (!this.state.result) {
         this.setState({result: '0' + num, dotPressed: true});
      }
      this.setState({result: this.state.result.toString() + num, dotPressed: true});
   }

   enterNum = (num) => {
      if (!this.state.result && num !== '.' && num !== '±') {
         this.addNewNumber(num);
      } else if (num === '±' && this.state.result) {
         this.reverseNum();
      } else if (num === '.' && !this.state.dotPressed) {
         this.addDot(num);
      } else if (num !== '.' && num !== '±'){
         this.addNumber(num);
      }
   }

   render() {
      const {result} = this.state;

      return (
         <div className='wrapper'>
            <div className='app'>
               <Result result={result}/>
               <Buttons result={result} enterNum={this.enterNum}/>
            </div>
         </div>
      );
   }
}

export default App;