import { Chart } from "react-google-charts";
import * as React from "react";

const Google_chart = () =>
{
    return  <><Chart
    width={'500px'}
    height={'500px'}
    chartType="PieChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['Subject', 'Performance'],
      ['Engineering Mathematics', 56],
      ['Data Structures and Applications',80 ],
      ['Analog and Digital Electronics', 80],
      ['Computer Organization', 30],
      ['Software Engineering', 35],
    ]}
    options={{
      title: 'Subject Wise Performance',
      // Just add this option
      pieHole: 0.4,
    }}
    rootProps={{ 'data-testid': '3' }}
  />

</>
}

export default Google_chart;