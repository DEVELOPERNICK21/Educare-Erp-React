import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import { Link } from "react-router-dom";
import './LogIn.css';




const LogIn = () => {


  return (
        <>
            <div className="allsignup">
                <div className='wrapperLogin'>
                    <div className='Headeline'>
                        <h1>Welcome, We make Schooling Easier</h1>
                    </div>
                    <form>
                        <div className='signupForm'>
                            <div className='signin'>
                                <div className='form_group'>
                                    <input type='email' placeholder='Email' required='' />
                                </div>
                                <div className='form_group'>
                                    <input type='password' placeholder='Password' required='' />
                                </div>
                                <div className='forget_password'>
                                    <div className='check_box'>
                                        <input type='checkbox' id='checkBox' />
                                        <label for='checkbox'>Remember me</label>
                                    </div>
                                    <Link to={"/profile"}>Forget Password</Link>
                                </div>
                                <Button variant='contained' className="btn" color='disable'>
                                    LOGIN
                                </Button>
                                <div className='account_exit'>
                                    Create a new account?   <Link to={'/signup'}>
                  SignUp
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

export default LogIn;
