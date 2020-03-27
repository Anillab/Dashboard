import React from 'react';

import {
  Link
} from 'react-router-dom';



const Each=(props) =>{
  console.log(props);
  return(
    <tr>
      <th>{props.obj.name}</th>
      <td>{props.obj.phoneNumber}</td>
      <td>{Array.isArray(props.obj.contributions) ? props.obj.contributions.length : 0}</td>


      <td><Link to='/groupStatement'>{'statement'}</Link></td>

    </tr>

)
}
export default Each;
