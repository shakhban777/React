import React from "react";
import arrowRight from "../../../assets/img/icons/arrow-right.svg";
import '../forecast.scss';

type RightArrowTypeProps = {
   onNextHandler: () => void,
}

const RightArrowBlock: React.FC<RightArrowTypeProps> = ({
                                                          onNextHandler
                                                      }) => {
   return (
      <div onClick={onNextHandler}
           className="weather-blocks__arrow-right">
         <img src={arrowRight} alt="arrow-right"/>
      </div>
   );
};

export default RightArrowBlock;