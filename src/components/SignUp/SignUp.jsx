import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typewriter from "typewriter-effect";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import { Link, useHistory } from "react-router-dom";
import "./Signup.css";
import anim from "./Images/Blogging.json";
import { FaEraser } from "react-icons/fa";

const SignUp = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handelInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("invalid Registraion");
      console.log("invalid Registraion");
    } else {
      window.alert("Successfully Registraion");
      console.log("Successfully Registraion");

      history.push("/login");
    }
  };

  // // le
  return (
    <>
      <div className='allsignup'>
        <div className='wrapper'>
          <div className='Headeline'>
          <h1>
            <Typewriter
              options={{
                strings: ["Welcome, We make Schooling Easier", "Make Your Account Now!"],
                autoStart: true,
                loop: true,
              }}
            />

            </h1>
          </div>
          <form method='POST'>
            <div className='signupForm'>
              <div className='signup'>
                <div className='form_group'>
                  <input
                    type='text'
                    placeholder='Full Name'
                    required=''
                    value={user.name}
                    onChange={handelInputs}
                    name='name'
                  />
                </div>
                <div className='form_group'>
                  <input
                    type='email'
                    placeholder='Email'
                    required=''
                    value={user.email}
                    onChange={handelInputs}
                    name='email'
                  />
                </div>
                <div className='form_group'>
                  <input
                    type='text'
                    placeholder='Phone Number'
                    required=''
                    value={user.phone}
                    onChange={handelInputs}
                    name='phone'
                  />
                </div>
                <div className='form_group'>
                  <input
                    type='password'
                    placeholder='Password'
                    required=''
                    value={user.password}
                    onChange={handelInputs}
                    name='password'
                  />
                </div>
                <div className='form_group'>
                  <input
                    type='password'
                    placeholder='Confirm Password'
                    required=''
                    value={user.cpassword}
                    onChange={handelInputs}
                    name='cpassword'
                  />
                </div>
                <Button
                  variant='contained'
                  value='register'
                  name='signup'
                  onClick={PostData}
                  className='btn'
                  color='disable'
                >
                  Sign Up
                </Button>
                <div className='account_exit'>
                  Already have an account? <Link to={"/LogIn"}>LogIn</Link>
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
