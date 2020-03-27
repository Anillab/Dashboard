import React from 'react';

import {
  Link
} from 'react-router-dom';



const MembEach=(props) =>{
  console.log(props)
  return(
    <tr>
      <th>{props.obj.name}</th>
      <th>{props.obj.phoneNumber}</th>
      <th>{props.obj.group}</th>

      <Link to='/groupStatement'>
      <th>{'statement'}</th>
      </Link>
    </tr>

)
}
export default MembEach;
