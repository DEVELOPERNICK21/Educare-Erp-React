import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className='AboutUSMain'>
        <div className='wrapperAbout'>
        <div className='AboutUs_cover'>
          <div className='Headeline'>
            <h1>Welcome, We make Schooling Easier</h1>
          </div>
        <div className='AboutUs_content'>
            <h2>What We Do</h2>
         
            <h4>
              What we do We empower digital work-space and campuses with our
              wide portfolio of services, solutions and technology - helping
              them to optimize flow of Information and automating antiquated
              processes for higher productivity. Educare is focused on providing
              one-stop smart solutions for all the smart needs. In Bear Tech
              360, we have different types of CCTV cameras. DVR’s, NVR ’s, etc.
              which we will help you to choose from based on your specifications
              and your budget. We normally spend some time to evaluate the
              location and the nature of your business; this would give us a
              better unders tanding of possible vulnerabilities and warnings
            </h4>
          <div className='Explore'>
            Want to explore More <Link to={"/signup"}>Explore!</Link>
          </div>
        </div>
        </div>
        </div>

      </div>
    </>
  );
};

export default AboutUs;
