import React, {useState} from 'react';
import {CityType} from "../../app/app";

export type SelectCitiesTypeProps = {
   cities: CityType[],
   onChangeHandler: (coords: string, blockNum: number) => void,
   blockNum: number
}

const SelectCity: React.FC<SelectCitiesTypeProps> = ({cities, onChangeHandler, blockNum}) => {
   const [isActive, setIsActive] = useState<boolean>(false);

   const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
      onChangeHandler(event.target.value, blockNum);
      event.target.blur();
   };
   const focusHandler = (): void => {
      setIsActive(true);
   };
   const unFocusHandler = (): void => {
      setIsActive(false);
   };

   let styleClass: string = 'select-city__wrapper';
   if (isActive) {
      styleClass += ' active';
   } else {
      styleClass = 'select-city__wrapper';
   }


   return (
      <div className={styleClass}>
         <select className='select select-city'
                 onFocus={focusHandler}
                 onBlur={unFocusHandler}
                 onChange={changeHandler}>
            <option hidden>Select city</option>
            {cities.map(city => <option key={city.lat}
                                        value={`${city.lat}, ${city.lon}`}>{city.name}</option>
            )}
         </select>
      </div>
   );
};

export default SelectCity;


