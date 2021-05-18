import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Calenders from "../Calender/Calendar";
import ProfileCard from "../Dashboard/Profile_card";
import Header from "../Header/Header";
import { useHistory } from "react-router-dom";
import Cards from "./Cards";
import "./Dashboard.css";
import Google_chart from "./Google_Chart";
import Google_graphs from "./Google_graphs";
import Google_chart2 from "./google_chart2";

const Dashboard = () => {

  const history = useHistory();
  
  const callMainPage = async () => {

    
    try{
      const res = await fetch('/index',{
        method: "GET",
        headers: {
            Accept:"application/json",
            "Content-Type" : "application/json"
        },
        credentials: "include" } );
        
        const data = await res.json();
        console.log(data);

        if(!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }

    }
    catch(err)
    {
      console.log(err)
      history.push('./login');
    }
  }

  useEffect(() => 
  {
    callMainPage();
  },[]);

  return (
    <>
    <form method="GET">
      <main className='dashboard'>
        <div className='First_row'>
          <Cards />
        </div>

        <div className='secod-row'>
          <div className='graphs_dashboard'>
            <Google_graphs />
          </div>
          <div className='charts_rowSecond'>
            <Google_chart />
          </div>
        </div>

        <div className='Third-row'>
          <div className='chart_rowThird'>
            <Google_chart2 />
          </div>
          <div className='profile_rowThird'>
            <ProfileCard />
          </div>
          <div className="calender_rowThird">
            <Calenders />
          </div>
        </div>
      </main>
      </form>
    </>
  );
};

export default Dashboard;
