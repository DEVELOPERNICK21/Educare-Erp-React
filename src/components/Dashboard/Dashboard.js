import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Calenders from '../Calender/Calendar';
import ProfileCard from '../Dashboard/Profile_card';
import Header from '../Header/Header';
// import Keep from '../Keep/keep';
// import TodoMaterial from '../Todo/ToDo_Material';
import Cards from './Cards';
import Charts from './charts';
import './Dashboard.css'
import Graphs from './Graph';
import Chart from 'react-apexcharts'


const Dashboard = () => 
{
    const [cardcolor, setCardColor] = useState("#AB90FF");

    const  attendPer = 90 ;  
    
     

  

    return(
        <>
            <main className="dashboard">

                <div  className="First_row">
                   <Cards />
                </div>

                <div className="secod-row">
                    <div className='charts'>
                   {/* <ProfileCard /> */}
                    </div>
                        {/* <Charts /> */}
                
                  
                    <div className='calender'>
                        {/* <Calenders  /> */}
                    </div>
                </div>


                <div className="Third-row">
                    {/* <Graphs /> */}

                </div>

            <div style={{ marginTop: 90, display: 'flex' }}>
                <div style={{width: '70%' }}>
                </div>
            <div style={{width: '45%' }}>
                </div>
            </div>

            <div>
                
                   {/* <Cards />
                   <ProfileCard />
                        <Charts />
                        <Calenders  /> */}
            </div>
            </main>

        </>
    );
}
    
export default Dashboard;