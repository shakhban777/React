import React from "react";
import ResultItem from "./result-item";

const Results = ({ items, search }) => {

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
            {elements}
         </ul>
      </div>
   );

}

export default Results;