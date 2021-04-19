
// STEP 2 - Chart Data
const chartData = [
    {
      label: "April",
      value: "95%"
    },
    {
      label: "May",
      value: "85%"
    },
    {
      label: "June",
      value: "80%"
    },
    {
      label: "July",
      value: "45%"
    },
    {
      label: "Aug",
      value: "65%"
    },
    {
      label: "Sep",
      value: "45%"
    },
    {
      label: "Oct",
      value: "40%"
    },
    {
      label: "Nov",
      value: "36%"
    }
  ];
  
  // STEP 3 - Creating the JSON object to store the chart configurations
  const chartConfigsd = {
    type: "column2d", // The chart type
    width: "700", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Student Progress in [2017-18]",
        //Set the chart subcaption
        subCaption: "In Higher Secondry",
        //Set the x-axis name
        xAxisName: "Country",
        //Set the y-axis name
        yAxisName: "Reserves (MMbbl)",
        numberSuffix: "K",
        //Set the theme for your chart
        theme: "fusion"
      },
      // Chart Data
      data: chartData
    }
  };
  
  
  
  
  // STEP 2- Define the categories representing the labels on the X-axis
  const categories =  [
    {
      "category": [
        { "label": "Q1" },
        { "label": "Q2" },
        { "label": "Q3" },
        { "label": "Q4" }
      ]
    }
  ]
  // STEP 3- Construct the dataset comprising multiple series
  const dataset = [
    {
      "seriesname": "Previous Year",
      "data": [
        { "value": "12000" },
        { "value": "10500" },
        { "value": "23500" },
        { "value": "16000" }
      ]
    },
    {
      "seriesname": "Current Year",
      "data": [
        { "value": "24400" },
        { "value": "29800" },
        { "value": "20800" },
        { "value": "26800" }
      ]
    }
  ]
  
  // STEP 4 - Creating the JSON object to store the chart configurations
  const chartConfigs = {
    type: 'mscolumn2d',// The chart type
    width: '700', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
     dataSource: {
    //Chart Configurations
      "chart": {
        "theme": "fusion",
        "caption": "Comparison of Quarterly Revenue",
        "xAxisname": "Quarter",
        "yAxisName": "Revenues (In USD)",
        "numberPrefix": "$",
        "plotFillAlpha": "80",
        "divLineIsDashed": "1",
        "divLineDashLen": "1",
        "divLineGapLen": "1"
      },
      "categories": categories,
      "dataset": dataset,
    }
  }

  