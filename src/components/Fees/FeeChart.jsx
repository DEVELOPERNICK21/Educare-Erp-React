import { Chart } from "react-google-charts";
import * as React from "react";

const FeeChart = () =>
{
    return  <><Chart
    width={'300px'}
    height={'24rem'}
    chartType="PieChart"
   className="gc-3"
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

export default FeeChart;