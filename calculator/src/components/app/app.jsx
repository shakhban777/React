import React, {Component} from "react";
import Result from "../result/result";
import Buttons from "../buttons/buttons";
import './app.scss';

class App extends Component {
   state = {
      result: 0,
      dotPressed: false,
      firstNumber: null
   };

   addNewNumber(num) {
      this.setState({result: num});
   }

   addNumber(num) {
      this.setState({result: this.state.result.toString() + num});
   }

   reverseNum() {
      if (this.state.result.toString().includes('/' || '*' || '-' || '+')) {
      } else if (this.state.result.toString().endsWith('.')) {
         this.setState({dotPressed: false});
      } else {
         this.setState({result: -this.state.result});
      }
   }

   addDot(num) {
      if (!this.state.result) {
         this.setState({result: `0.`, dotPressed: true});
      } else if (this.state.result.toString().endsWith('/' || '*' || '-' || '+')) {
         this.setState({result: `${this.state.result}0.`, dotPressed: true});
      } else {
         this.setState({result: this.state.result.toString() + num, dotPressed: true});
      }
   }

   getNumber = (num) => {
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

   clean() {
      this.setState({result: 0, dotPressed: false});
   }

   del() {
      let res = this.state.result.toString().slice(0, -1);
      if (!res) res = 0;
      this.setState({result: res});
   }

   equal() {
      if (this.state.result.toString().includes('/')) {
         const secondNumber = +(this.state.result.split('/')[1]);
         const divisionResult = parseFloat((+this.state.firstNumber / secondNumber).toFixed(15));
         this.setState({result: divisionResult});
      } else if (this.state.result.toString().includes('*')) {
         const secondNumber = +(this.state.result.split('*')[1]);
         const multiResult = parseFloat((+this.state.firstNumber * secondNumber).toFixed(15));
         this.setState({result: multiResult});
      } else if (this.state.result.toString().includes('+')) {
         const secondNumber = +(this.state.result.split('+')[1]);
         const plusResult = parseFloat((+this.state.firstNumber + secondNumber).toFixed(15));
         this.setState({result: plusResult});
      } else if (this.state.result.toString().includes('-')) {
         const secondNumber = +(this.state.result.split('-')[1]);
         const minusResult = parseFloat((+this.state.firstNumber - secondNumber).toFixed(15));
         this.setState({result: minusResult});
      }
   }

   operationSet(operation) {
      this.setState({firstNumber: this.state.result, dotPressed: false});
      this.setState({result: this.state.result + operation});
   }

   getOperation = (oper) => {
      if (oper === 'C') {
         this.clean();
      } else if (oper === '=') {
         this.equal();
      } else if (oper === '<=') {
         this.del();
      } else if (oper === '/' || oper === '*' || oper === '+' || oper === '-') {
         this.operationSet(oper);
      }
   }

   render() {
      const {result} = this.state;

      return (
         <div className='wrapper'>
            <div className='app'>
               <Result result={result}/>
               <Buttons result={result}
                        getNumber={this.getNumber}
                        getOperation={this.getOperation}/>
            </div>
         </div>
      );
   }
}

export default App;