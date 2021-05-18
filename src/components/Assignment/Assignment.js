import React, { useState } from "react";
import "./Assignment.css";
import Button from "@material-ui/core/Button";
import Assignment_info from "./Assignment_tabel";

const Acedmics = () => {

    const [subject, setSubject] = useState();

    
  return (
    <>
      <div className='Assisgnment_area'>
        <div className='Assisgnment_upper_area'>
          <h1> {subject} Assignment</h1>
        </div>
        <div className='Assisgnment_down_area'>
          <div className='Assisgnment_right_area'>
            
          </div>
          <div className='Assisgnment_left_area'>
          <div className="select_subject">
                <label >Please Select the Subject:</label>
            <select onChange={(e) => {setSubject(e.target.value)}} value={subject}> 
                <optgroup>Select the subject</optgroup>
                <option >Engineering Mathematics</option>
                <option >Data Structures and Applications.</option>
                <option >Analog and Digital Electronics.</option>
                <option >Computer Organization</option>
                <option >Software Engineering</option>
            </select>
            
        
            <Button
                variant='contained'
                value='result_show'
                name='result_show'
                className='btn1'
                color='disable'
              >
                View
              </Button>
            
          </div>
          <div className="assignment_tabel">

                <h2>Your {subject} Assignment Information </h2>

                <Assignment_info />
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Acedmics;
