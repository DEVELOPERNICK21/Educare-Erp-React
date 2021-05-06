import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import { Link } from "react-router-dom";
import './Signup.css';




const SignUp = () => {
  
  

  return (
        <>
            <div className="allsignup">
                <div className='wrapper'>
                    <div className='Headeline'>
                        <h1>Welcome, We make Schooling Easier</h1>
                    </div>
                    <form>
                        <div className='signupForm'>
                            <div className='signup'>
                                <div className='form_group'>
                                    <input type='text' placeholder='Full Name' required='' />
                                </div>
                                <div className='form_group'>
                                    <input type='email' placeholder='Email' required='' />
                                </div>
                                <div className='form_group'>
                                    <input type='password' placeholder='Password' required='' />
                                </div>
                                <Button variant='contained' className="btn" color='disable'>
                                    Sign Up
                                </Button>
                                <div className='account_exit'>
                                    Already have an account?   <Link to={'/LogIn'}>
                  LogIn
                  </Link>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;
