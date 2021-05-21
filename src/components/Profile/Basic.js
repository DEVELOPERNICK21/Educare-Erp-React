import React,{useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";

const BasicInfo = () =>
{
  const history = useHistory();

  const [userData, setUserData] = useState({});

  const callProfileData = async () => {
    try {
      const res = await fetch("/index", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("./login");
    }
  };

  useEffect(() => {
    callProfileData();
  }, []);
    return(
        <>
              <div className='contactForm'>
            
            <h2>Basic Info</h2>
            <div className='formBox'>
              <div className='inputBox w50'>
                <span>First Name</span>
                <h2>{userData.name}</h2>
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
                <h2>{userData.email}</h2>
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