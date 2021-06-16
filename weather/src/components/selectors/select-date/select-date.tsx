import React, {useState} from 'react';
import './select-date.scss';

type SelectDatePropsType = {
   onChangeDate?: (date: number) => void
}

const SelectDate: React.FC<SelectDatePropsType> = ({onChangeDate}) => {
   const [isFocused, setIsFocused] = useState<boolean>(false);

   const oneDay = 86400000;
   const minDays = new Date(Date.now() - oneDay * 5).toISOString().slice(0, 10);
   const maxDays = new Date().toISOString().slice(0, 10);

   const onDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const date = Date.parse(event.target.value) / 1000;
      if (onChangeDate) {
         onChangeDate(date);
      }
   };

   const onFocusChange = () => {
      setIsFocused(true);
   };

   const onBlurChange = () => {
      setIsFocused(false);
   };

   const opacityStyle = isFocused ? 0 : 1;

   return (
      <div className='select-date__wrapper'>
         <input type="text"
                className='select select-date__placeholder'
                placeholder="Select date"
                style={{opacity: opacityStyle}}/>
         <input className='select select-date'
                type="date"
                min={minDays}
                max={maxDays}
                onChange={onDateChange}
                onFocus={onFocusChange}
                onBlur={onBlurChange}
                onInput={onFocusChange}/>
      </div>
   );
};

export default SelectDate;