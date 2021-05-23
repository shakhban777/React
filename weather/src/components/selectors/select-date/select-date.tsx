import React from 'react';

type SelectDatePropsType = {
   onChangeDateHandler: (date: number) => void
}

const SelectDate: React.FC<SelectDatePropsType> = ({onChangeDateHandler}) => {
   const oneDay = 86400000;
   const minDays = new Date(Date.now() - oneDay * 5).toISOString().slice(0, 10);
   const maxDays = new Date().toISOString().slice(0, 10);

   const onDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const date = Date.parse(event.target.value) / 1000;
      onChangeDateHandler(date);
   };

   return (
      <div>
         <input onChange={onDateChange}
                className='select select-date'
                type="text"
                min={minDays}
                max={maxDays}
                placeholder="Select Date"
                onFocus={(e) => {
                   e.currentTarget.type = "date";
                   e.currentTarget.focus();
                }}/>
      </div>
   )
}

export default SelectDate;