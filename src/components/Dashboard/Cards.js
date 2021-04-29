import React, {useState} from 'react';
import 'react-calendar/dist/Calendar.css';
import './Cards.css'


const Cards = () => 
{
    const [cardcolor, setCardColor] = useState("#fff");

    const  attendPer = 90 ;
    

    return(
        <>
            <main className="card">

                <div  className="cards">
                    <div className="card-single" >
                        <div >
                            <h1>{attendPer}%</h1>
                            <span>Attendance</span>
                        </div>
                        <div>
                            <span className="las la-signal"></span>
                        </div>
                    </div>

                    <div className="card-single">
                        <div>
                            <h1>Exam</h1>
                            <span>Time Table</span>
                        </div>
                        <div>
                            <span className="las la-calendar"></span> 
                        </div>
                    </div>

                    <div className="card-single">
                        <div>
                            <h1>7</h1>
                            <span>Assignment</span>
                        </div>
                        <div>
                            <span className="las la-paste"></span>  
                        </div>
                    </div>

                    <div className="card-single">
                        <div>
                            <h1>70%</h1>
                            <span>Fees</span>
                        </div>
                        <div>
                            <span className="las la-money-bill-wave"></span>
                        </div>
                    </div>

                </div>

              
            </main>

        </>
    );
}
    
export default Cards;