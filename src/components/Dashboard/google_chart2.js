import { Chart } from "react-google-charts";
import * as React from "react";

const Google_chart2 = () =>
{
    return  <><Chart
    width={'300px'}
    height={'24rem'}
    chartType="PieChart"
   className="gc-3"
    loader={<div>Loading Chart</div>}
    data={[
      ['Task', 'Hours per Day'],
      ['Present', 62],
      ['Absent', 22],
      ['Leave', 5],
      ['Half Day', 7],
      ['Event', 4],
    ]}
    options={{
      title: 'My Daily Activities',
      // Just add this option
      pieHole: 0.4,
    }}
    rootProps={{ 'data-testid': '3' }}
  />

</>
}

export default Google_chart2;