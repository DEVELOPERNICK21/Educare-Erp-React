import React from 'react';

const FeeInfo = () =>
{
    return(
        <>
            <h2>Yearly Fee Info</h2>

<table className='Profile_tabel_fee'>
  <tr className='tr_profileq_fee'>
    <th className='th_profileq_fee'>Fee Type</th>
    <th className='th_profileq_fee'>1st Installment</th>
    <th className='th_profileq_fee'>2nd Installment</th>
    <th className='th_profileq_fee'>Scholarship</th>
  </tr>
  <tr className='tr_profileq_fee'>
    <td className='td_profileq_fee'>Payable</td>
    <td className='td_profileq_fee'>50,000</td>
    <td className='td_profileq_fee'>60,000</td>
    <td rowspan="1" className='td_profileq_fee'>Yes</td>  
  </tr>
  <tr className='tr_profileq_fee'>
    <td className='td_profileq_fee'>Paid</td>
    <td className='td_profileq_fee'>50,000</td>
    <td className='td_profileq_fee'>30,000</td>
    <td  className='td_profileq_fee'>N/A</td>
  </tr>
  <tr className='tr_profileq_fee'>
    <td className='td_profileq_fee'>Dues  </td>
    <td className='td_profileq_fee'>0.00</td>
    <td className='td_profileq_fee'>30,000</td>
    <td  className='td_profileq_fee'>N/A</td>
  </tr>
  <tr className='tr_profileq_fee'>
    <td className='td_profileq_fee'>Late Fine  </td>
    <td className='td_profileq_fee'>0.00</td>
    <td className='td_profileq_fee'>0.00</td>
    <td  className='td_profileq_fee'>N/A</td>
  </tr>
  <tr className='tr_profileq_fee'>
    <td className='td_profileq_fee'>Total Paid</td>
    <td  className='td_profileq_fee'>80,000</td>
    <td  className='td_profileq_fee'></td>
    <td  className='td_profileq_fee'></td>  

  </tr>
  <tr className='tr_profileq_fee'>
    <td className='td_profileq_fee'>Total Dues</td>
    <td columnspan="2" className='td_profileq_fee'>30,000</td>
    <td  className='td_profileq_fee'></td>
    <td  className='td_profileq_fee'></td>
    <td  className='td_profileq_fee'></td>  

    

  </tr>
</table>

        </>
    );
}

export default FeeInfo;