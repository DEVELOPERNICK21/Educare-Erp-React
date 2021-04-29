import React, { useState } from 'react';
import './Charts.css'

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




const Graphs = () => 
{ 
  return (
    <>
         
            <ReactFusioncharts
                  type="column2d"
                  width="60%"
                  height="55%"
                  dataFormat="JSON"
                  dataSource={dataSource2}
          />
      
</>
  );
}

export default Graphs;