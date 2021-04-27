import React from 'react';

const BasicInfo = () =>
{
    return(
        <>
              <div className='contactForm'>
            
            <h2>Basic Info</h2>
            <div className='formBox'>
              <div className='inputBox w50'>
                <span>First Name</span>
                <h2>Nick Kubde</h2>
              </div>

              <div className='inputBox w50'>
                <span>Enrollment Number</span>
                <h2>0187CS171090</h2>
              </div>

              <div className='inputBox w50'>
                <span>Branch</span>
                <h2>CSE</h2>
              </div>

              <div className='inputBox w50'>
                <span>Section</span>
                <h2>C</h2>
              </div>

              <div className='inputBox w50'>
                <span>DOB </span>
                <h2>21/April/2000</h2>
              </div>

              <div className='inputBox w50'>
                <span>Email Address</span>
                <h2>nikhilkubde21@gmail.com</h2>
              </div>

              <div className='inputBox w50'>
                <span>Tutor Gurdian</span>
                <h2>Anita Yadav</h2>
              </div>

              <div className='inputBox w50'>
                <span>Organization</span>
                <h2>SISTec</h2>
              </div>
            </div>
          </div>
        </>
    );
}

export default BasicInfo;