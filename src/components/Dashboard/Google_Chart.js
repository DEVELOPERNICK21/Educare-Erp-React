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
      ['Task', 'Hours per Day'],
      ['NIck', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7],
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

export default Google_chart;