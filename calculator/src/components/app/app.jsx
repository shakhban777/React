import React, {Component} from "react";
import './app.scss';
import Result from "../result/result";
import Buttons from "../buttons/buttons";

class App extends Component {
   state = {
      result: 0,
   }

   render() {
      return (
         <div className='wrapper'>
            <div className='app'>
               <Result result={this.state.result}/>
               <Buttons/>
            </div>
         </div>
      );
   }
}

export default App;