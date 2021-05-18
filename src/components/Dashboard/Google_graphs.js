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
    ['Month', 'Attendance', 'Present Days', 'Absent Days','Leave','Half Day' ],
    ['July', '42 %', 23, 3, 1,0],
    ['Aug', "49 %", 18, 5, 2,3],
    ['Sep', "66 %", 19, 4, 1,0],
    ['Oct', "72 %", 24, 1, 1,1],
    ['Nov', "90 %", 13, 7, 1,2],
  ]}
  options={{
    
    // style:
    // {
    //     position:'inherit'
    // },
    // Material design options
    chart: {
      title: 'Student Performance',
      subtitle: 'Class, Attendance, and Exam: 2020-2021',
    },
    
  }}
  // For tests
  rootProps={{ 'data-testid': '2' }}
/>
</>
}

export default Google_graphs;