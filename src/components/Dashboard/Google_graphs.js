import { Chart } from "react-google-charts";
import * as React from "react";


const Google_graphs = () =>
{
    return  <>
<Chart   width={'900px'}
  height={'500px'}

  chartType="Bar"
  loader={<div>Loading Chart</div>}
  data={[
    ['Year', 'Sales', 'Expenses', 'Profit'],
    ['2014', 1000, 400, 200],
    ['2015', 1170, 460, 250],
    ['2016', 660, 1120, 300],
    ['2017', 1030, 540, 350],
  ]}
  options={{
    
    // style:
    // {
    //     position:'inherit'
    // },
    // Material design options
    chart: {
      title: 'Company Performance',
      subtitle: 'Sales, Expenses, and Profit: 2014-2017',
    },
    
  }}
  // For tests
  rootProps={{ 'data-testid': '2' }}
/>
</>
}

export default Google_graphs;