import React, { useState } from "react";
import "./Fee.css";
import FeeProfile from './SideProfile';
import FeeStatus from "./FeeComponent";
import FeeChart from "./FeeChart";

const Fee = () => 
{
  
  return (
    <>
      <div className='Fee_area'>
        <div className='Fee_upper_area'>
          <h1>Fee Status</h1>
        </div>
        <div className='Fee_down_area'>
          <div className='Fee_right_area'>
                   <FeeChart />
          </div>
          <div className='Fee_left_area'>
                <FeeStatus />
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Fee;
