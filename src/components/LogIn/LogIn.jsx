import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typewriter from "typewriter-effect";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import { Link, useHistory } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignIn = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("invalid details");
      console.log("invalid details");
    } else {
      window.alert("Successfully login");
      console.log("Successfully login");

      history.push("/");
    }
  };

  return (
    <>
      <div className='allsignup'>
        <div className='wrapperLogin'>
          <div className='Headeline'>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Login Here!",
                    "Welcome, We make Parenting Easier",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
          <form method='POST'>
            <div className='signupForm'>
              <div className='signin'>
                <div className='form_group'>
                  <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    name='email'
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required=''
                  />
                </div>
                <div className='form_group'>
                  <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    name='password'
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    required=''
                  />
                </div>
                <div className='forget_password'>
                  <div className='check_box'>
                    <input type='checkbox' id='checkBox' />
                    <label for='checkbox'>Remember me</label>
                  </div>
                  <Link to={"/profile"}>Forget Password</Link>
                </div>
                <Button
                  variant='contained'
                  value='signin'
                  name='signin'
                  onClick={SignIn}
                  className='btn'
                  color='disable'
                >
                  LOGIN
                </Button>
                <div className='account_exit'>
                  Create a new account? <Link to={"/signup"}>SignUp</Link>
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
