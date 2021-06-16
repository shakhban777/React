import React, {useState} from 'react';
import {CityType} from "../../app/app";
import './select-city.scss';

export type SelectCitiesTypeProps = {
   cities: CityType[],
   onChangeLocation: (coords: string, blockSelect: number) => void,
   blockSelect: number
}

const SelectCity: React.FC<SelectCitiesTypeProps> = ({cities, onChangeLocation, blockSelect}) => {
   const [isActive, setIsActive] = useState<boolean>(false);

   const changeLocationHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
      onChangeLocation(event.target.value, blockSelect);
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
                 onChange={changeLocationHandler}>
            <option hidden>Select city</option>
            {cities.map(city => <option key={city.lat}
                                        value={`${city.lat}, ${city.lon}`}>{city.name}</option>
            )}
         </select>
      </div>
   );
};

export default SelectCity;


