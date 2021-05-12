import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Calenders from "../Calender/Calendar";
import ProfileCard from "../Dashboard/Profile_card";
import Header from "../Header/Header";
import { Redirect } from "react-router-dom";
// import Keep from '../Keep/keep';
// import TodoMaterial from '../Todo/ToDo_Material';
import Cards from "./Cards";
// import Charts from './charts';
import "./Dashboard.css";
// import Graphs from "./Graph";
import Google_chart from "./Google_Chart";
import Google_graphs from "./Google_graphs";
import Google_chart2 from "./google_chart2";

const Dashboard = () => {
  const [cardcolor, setCardColor] = useState("#AB90FF");

  const attendPer = 90;

  return (
    <>
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
    </>
  );
};

export default Dashboard;
