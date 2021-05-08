import React, { useState } from "react";
import "./Fee.css";
import BasicInfo from './Basic'
import PersonalInfo from './Personalinfo'
import FeeInfo from "./AcedmicInfo";

const FeeStatus = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div className='tab_container_profile'>
        <div className='bloc-tabs_profile'>
          <button
            className={toggleState === 1 ? "fee_tabs fee_active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Fee
          </button>
          {/* <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Other 
          </button> */}
          
         
        </div>

        <div className='content-tabs'>
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
         <FeeInfo />
          </div>

          {/* <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
           <PersonalInfo />
          </div> */}

          
          
        </div>
      </div>
    </>
  );
};

export default FeeStatus;
