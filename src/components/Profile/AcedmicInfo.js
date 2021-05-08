import React from 'react';

const AcedmicInfo = () =>
{
    return(
        <>
            <h2>Qualification Info</h2>

<table className='Profile_tabelq'>
  <tr className=' '>
    <th className='th_profileq'>Sr. No.</th>
    <th className='th_profileq'>Qualification</th>
    <th className='th_profileq'>Year Of Passing</th>
    <th className='th_profileq'>Board</th>
    <th className='th_profileq'>Percentage</th>
  </tr>
  <tr className='tr_profileq'>
    <td className='td_profileq'>1</td>
    <td className='td_profileq'>10th</td>
    <td className='td_profileq'>2015</td>
    <td className='td_profileq'>M.P. Board</td>
    <td className='td_profileq'>72</td>
  </tr>
  <tr className='tr_profileq'>
    <td className='td_profileq'>2</td>
    <td className='td_profileq'>12th</td>
    <td className='td_profileq'>2017</td>
    <td className='td_profileq'>M.P. Board</td>
    <td className='td_profileq'>70</td>
  </tr>
</table>
<h2>Acedmic Info</h2>

<table className='Profile_tabel'>
  <tr className='tr_profile'>
    <th className='th_profile'>Sr. No.</th>
    <th className='th_profile'>Subject</th>
    <th className='th_profile'>MST 1 Marks</th>
    <th className='th_profile'>MST 2 Marks</th>
    <th className='th_profile'>Total</th>
  </tr>
  <tr className='tr_profile'>
    <td className='td_profile'>1</td>
    <td className='td_profile'>Data Structure</td>
    <td className='td_profile'>75</td>
    <td className='td_profile'>70</td>
    <td className='td_profile'>72.5%</td>
  </tr>
  <tr className='tr_profile'>
    <td className='td_profile'>2</td>
    <td className='td_profile'>Algorithm</td>
    <td className='td_profile'>65</td>
    <td className='td_profile'>80</td>
    <td className='td_profile'>72.5%</td>{" "}
  </tr>
  <tr className='tr_profile'>
    <td className='td_profile'>3</td>
    <td className='td_profile'>Operating System</td>
    <td className='td_profile'>90</td>
    <td className='td_profile'>90</td>
    <td className='td_profile'>90%</td>{" "}
  </tr>
  <tr className='tr_profile'>
    <td className='td_profile'>4</td>
    <td className='td_profile'>Computer Networks</td>
    <td className='td_profile'>68</td>
    <td className='td_profile'>78</td>
    <td className='td_profile'>73%</td>{" "}
  </tr>
  <tr className='tr_profile'>
    <td className='td_profile'>5</td>
    <td className='td_profile'>Databse & Management System</td>
    <td className='td_profile'>80</td>
    <td className='td_profile'>80</td>
    <td className='td_profile'>80%</td>{" "}
  </tr>
  <tr className='tr_profile'>
    <td className='td_profile'>6</td>
    <td className='td_profile'>Compiler Design</td>
    <td className='td_profile'>80</td>
    <td className='td_profile'>90</td>
    <td className='td_profile'>85%</td>{" "}
  </tr>
</table>
        </>
    );
}

export default AcedmicInfo;