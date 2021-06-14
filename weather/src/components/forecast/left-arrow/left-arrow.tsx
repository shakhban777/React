import React from "react";
import arrowLeft from "../../../assets/img/icons/arrow-left.svg";
import '../forecast.scss';

type LeftArrowTypeProps = {
   onPrevHandler?: () => void,
}

const LeftArrowBlock: React.FC<LeftArrowTypeProps> = ({
                                                         onPrevHandler
                                                      }) => {
   return (
      <div onClick={onPrevHandler}
           className="weather-blocks__arrow-left">
         <img src={arrowLeft} alt="arrow-left"/>
      </div>
   );
};

export default LeftArrowBlock;