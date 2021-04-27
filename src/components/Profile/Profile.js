import React, { useState } from "react";
import "./Profile.css";
import MainProfile from "./img/profile.jpg";

const Profile = () => {
//   const [toggleState, setToggleState] = useState(1);

//   const toggleTab = (index) => {
//     setToggleState(index);
//   };

  return (
    <>
      <div className='profile_area'>
        <div className='upper_area'>
          <h1>Profile Setting</h1>
        </div>
        <div className='down_area'>
          <div className='right_area'>
            <h1>Profile</h1>
            <div className='profile_Image'>
              <img
                src={MainProfile}
                width='250px'
                height='250px'
                alt='Profile-image'
              />
            </div>
            <div className='profileName'>
              <h2>Nick Kubde</h2>
              <small>Super Admin</small>
            </div>
          </div>
          <div className='left_area'>
            
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

            <div className='contactForm'>
              <h2>Personal Details</h2>
              <div className='formBox'>
                <div className='inputBox w50'>
                  <span>Mothers Name</span>
                  <h2>Kalpana Kubde</h2>
                </div>

                <div className='inputBox w50'>
                  <span>Fathers Name</span>
                  <h2>Jagdish Kubde</h2>
                </div>

                <div className='inputBox w50'>
                  <span>Mothers Occupation</span>
                  <h2>Nurse</h2>
                </div>

                <div className='inputBox w50'>
                  <span>Fathers Occupation</span>
                  <h2>Typewritter</h2>
                </div>

                <div className='inputBox w50'>
                  <span>Permanent Adress</span>
                  <h2>Vinoba Nagar Betul M.P.</h2>
                </div>

                <div className='inputBox w50'>
                  <span>State</span>
                  <h2>M.P.</h2>
                </div>

                <div className='inputBox w50'>
                  <span>City</span>
                  <h2>Bhopal</h2>
                </div>

                <div className='inputBox w50'>
                  <span>Parent Contact No.</span>
                  <h2>+91 9425639064</h2>
                </div>

                <div className='inputBox w50'>
                  <span>Student Contact No.</span>
                  <h2>+91 8827411901</h2>
                </div>

                <div className='inputBox w50'>
                  <span>Category</span>
                  <h2>OBC</h2>
                </div>
              </div>
            </div>

            <h2>Qualification Info</h2>

            <table className='Profile_tabelq'>
              <tr className='tr_profileq'>
                <th className='th_profileq'>Sr. No.</th>
                <th className='th_profileq'>Qualification</th>
                <th className='th_profileq'>Year Of Passing</th>
                <th className='th_profileq'>Board</th>
                <th className='th_profileq'>Percentage</th>
              </tr>
              <tr className='tr_profileq'>
                <td className='td_profileq'>1</td>
                <td className='td_profileq'>10th</td>
                <td className='td_profileq'>2015</td>
                <td className='td_profileq'>M.P. Board</td>
                <td className='td_profileq'>72</td>
              </tr>
              <tr className='tr_profileq'>
                <td className='td_profileq'>2</td>
                <td className='td_profileq'>12th</td>
                <td className='td_profileq'>2017</td>
                <td className='td_profileq'>M.P. Board</td>
                <td className='td_profileq'>70</td>
              </tr>
            </table>
            <h2>Acedmic Info</h2>

            <table className='Profile_tabel'>
              <tr className='tr_profile'>
                <th className='th_profile'>Sr. No.</th>
                <th className='th_profile'>Subject</th>
                <th className='th_profile'>MST 1 Marks</th>
                <th className='th_profile'>MST 2 Marks</th>
                <th className='th_profile'>Total</th>
              </tr>
              <tr className='tr_profile'>
                <td className='td_profile'>1</td>
                <td className='td_profile'>Data Structure</td>
                <td className='td_profile'>75</td>
                <td className='td_profile'>70</td>
                <td className='td_profile'>72.5%</td>
              </tr>
              <tr className='tr_profile'>
                <td className='td_profile'>2</td>
                <td className='td_profile'>Algorithm</td>
                <td className='td_profile'>65</td>
                <td className='td_profile'>80</td>
                <td className='td_profile'>72.5%</td>{" "}
              </tr>
              <tr className='tr_profile'>
                <td className='td_profile'>3</td>
                <td className='td_profile'>Operating System</td>
                <td className='td_profile'>90</td>
                <td className='td_profile'>90</td>
                <td className='td_profile'>90%</td>{" "}
              </tr>
              <tr className='tr_profile'>
                <td className='td_profile'>4</td>
                <td className='td_profile'>Computer Networks</td>
                <td className='td_profile'>68</td>
                <td className='td_profile'>78</td>
                <td className='td_profile'>73%</td>{" "}
              </tr>
              <tr className='tr_profile'>
                <td className='td_profile'>5</td>
                <td className='td_profile'>Databse & Management System</td>
                <td className='td_profile'>80</td>
                <td className='td_profile'>80</td>
                <td className='td_profile'>80%</td>{" "}
              </tr>
              <tr className='tr_profile'>
                <td className='td_profile'>6</td>
                <td className='td_profile'>Compiler Design</td>
                <td className='td_profile'>80</td>
                <td className='td_profile'>90</td>
                <td className='td_profile'>85%</td>{" "}
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
