import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calender.css'
import 'react-calendar/dist/Calendar.css';
import Iframe from 'react-iframe'
// import {
//     SenseiProvider,
//     themeDark as theme,
//   } from "react-sensei";

const Calenders = () => {
    const [value, onChange] = useState(new Date());

    return (
        <>
            <Calendar 
                onChange={onChange}
                value={value} />

            {/* <Iframe classname="Google_cal"
                url="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FKolkata&amp;src=YzdjM2k5NnY2ZmxvaG05cWs4Njk0ZHI4ZWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Y2xhc3Nyb29tMTExODIzNTUxNzI5MDQzMzQ2MjczQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23D81B60&amp;color=%230B8043&amp;color=%230B8043&amp;color=%23b80672"
                 /> */}
            {/* <iframe 
               src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FKolkata&amp;src=YzdjM2k5NnY2ZmxvaG05cWs4Njk0ZHI4ZWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Y2xhc3Nyb29tMTExODIzNTUxNzI5MDQzMzQ2MjczQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23D81B60&amp;color=%230B8043&amp;color=%230B8043&amp;color=%23b80672" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no">
                   Cander
               </iframe>*/}
        </>
    );
}

export default Calenders;