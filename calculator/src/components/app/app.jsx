import React, {Component} from "react";
import Result from "../result/result";
import Buttons from "../buttons/buttons";
import './app.scss';

class App extends Component {
   state = {
      result: 0,
      dotPressed: false,
      finishedCalculate: false,
      firstNumber: null,
      currentOperation: null
   };

   endsWithOperation() {
      return this.state.result.toString().endsWith('/') || this.state.result.toString().endsWith('*')
         || this.state.result.toString().endsWith('-') || this.state.result.toString().endsWith('+');
   }

   addNewNumber(num) {
      this.setState({result: num, finishedCalculate: false});
   }

   addNumber(num) {
      this.setState({result: this.state.result.toString() + num, finishedCalculate: false});
   }

   reverseNum() {
      if (this.state.result.toString().endsWith('.')) this.setState({dotPressed: false});
      if (!this.state.currentOperation) this.setState({result: -this.state.result});
   }

   addDot(num) {
      if (!this.state.result || this.state.finishedCalculate) {
         this.setState({result: `0.`, dotPressed: true});
      } else if (this.endsWithOperation()) {
         this.setState({result: `${this.state.result}0.`, dotPressed: true});
      } else {
         this.setState({result: this.state.result.toString() + num, dotPressed: true});
      }
      this.setState({finishedCalculate: false});
   }

   getNumber = (num) => {
      if ((!this.state.result || this.state.finishedCalculate) && num !== '.' && num !== '±') {
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
      this.setState({result: 0, dotPressed: false, finishedCalculate: false, currentOperation: null});
   }

   del() {
      let res = this.state.result.toString().slice(0, -1);
      if (!res) res = 0;
      this.setState({result: res});
   }

   equal() {
      if (this.state.currentOperation) {
         const secondNumber = +(this.state.result.split(this.state.currentOperation)[1]);
         // eslint-disable-next-line no-new-func
         const calc = new Function('a', 'b', `return parseFloat((a ${this.state.currentOperation} b).toFixed(5))`);
         const res = calc(this.state.firstNumber, secondNumber);
         this.setState({result: res, finishedCalculate: true, currentOperation: null});
         return res;
      }
   }

   operationSet(operation) {
      if (this.state.currentOperation && !this.state.finishedCalculate && this.endsWithOperation()) {
         let oldResult = this.state.result;
         let deleteOperation = oldResult.slice(0, -1);
         this.setState({
            result: deleteOperation + operation,
            dotPressed: false,
            currentOperation: operation
         })
      } else if (this.state.currentOperation && !this.endsWithOperation()) {
         let res = this.equal();

         this.setState({
            firstNumber: parseFloat(res),
            currentOperation: operation,
            dotPressed: false,
            result: res + operation,
            finishedCalculate: false
         });
      } else {
         this.setState({
            firstNumber: +this.state.result,
            dotPressed: false,
            result: this.state.result + operation,
            currentOperation: operation,
            finishedCalculate: false
         });
      }
   }

   getOperation = (operation) => {
      if (operation === 'C') {
         this.clean();
      } else if (operation === '=') {
         this.equal();
      } else if (operation === '<=') {
         this.del();
      } else if (operation === '/' || operation === '*' || operation === '+' || operation === '-') {
         this.operationSet(operation);
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