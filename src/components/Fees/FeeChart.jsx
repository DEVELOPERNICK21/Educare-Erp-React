import React, { useState } from 'react';
import {card} from './img/card.svg'
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);


charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Student Performance On Subject",
    subcaption: "Subject In Class XII ",
    showpercentvalues: "1",
    defaultcenterlabel: "Subject Performance",
    aligncaptionwithcanvas: "0",
    captionpadding: "0",
    decimals: "1",
    plottooltext:
      "<b>$percentValue</b> Overall Subject Performance <b>$label</b>",
    centerlabel: "$label Performance:  $value Marks",
    theme: "fusion"
  },
  data: [
    {
      label: "English",
      value: "70"
    },
    {
      label: "Hindi",
      value: "75"
    },
    {
      label: "Maths",
      value: "56"
    },
    {
      label: "Chemistry",
      value: "73"
    },
    {
      label: "Physics",
      value: "69"
    }
  ]
};

const dataSource2 = {
  chart: {
      caption: "Monthly revenue for last year",
      subCaption: "Harry's SuperMart",
      xAxisName: "Month",
      yAxisName: "Revenues (In USD)",
      numberPrefix: "$",
      theme: "fusion"
  },
  data: [
      {
          label: "Jan",
          value: "420000"
      },
      {
          label: "Jan",
          value: "420000"
      },
      {
          label: "Jan",
          value: "420000"
      },
      {
          label: "Jan",
          value: "420000"
      },
      {
          label: "Jan",
          value: "420000"
      },
      {
          label: "Jan",
          value: "420000"
      },
      {
          label: "Jan",
          value: "420000"
      },
      {
          label: "Jan",
          value: "420000"
      },
  ],
  trendlines: [
      {
          line: [
              {
                  startvalue: "700000",
                  valueOnRight: "1",
                  displayvalue: "Monthly Target"
              }
          ]
      }
  ]
}




const FeeChart = () => 
{
  


  return (
    <>
            {/* <ReactFusioncharts
                  type="doughnut2d"
                  width="30%"
                  height="100%"
                  dataFormat="JSON"
                  dataSource={dataSource}
          /> */}

{/*          
            <ReactFusioncharts
                  type="column2d"
                  width="60%"
                  height="55%"
                  dataFormat="JSON"
                  dataSource={dataSource2}
          /> */}
      
</>
  );
}

export default FeeChart;