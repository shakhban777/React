import React from "react";
import ResultItem from "./result-item";
import Spinner from "../spinner/spinner";

const Results = ({ items, search, loading }) => {

   const spinner = loading ?  <Spinner/> : null
   const elements = items.map(item => {
      const {id, ...items} = item;
      return (
         <ResultItem {...items} key={id}/>
      );
   });

   return (
      <div className='result'>
         <p>Результат поиска по запросу: "{search}"</p>
         <ul className='list-group'>
            {spinner}
            {elements}
         </ul>
      </div>
   );

}

export default Results;