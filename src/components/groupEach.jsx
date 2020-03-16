import React from 'react';

import {
  Link
} from 'react-router-dom';



const Each=(props) =>{
  console.log(props);
  return(
    <tr>
      <th>{props.obj.name}</th>
      <th>{props.obj.description}</th>
      <th>{props.obj.bankAccount}</th>
      <th>{props.obj.frequency}</th>
      <th>{Array.isArray(props.obj.members) ? props.obj.members.length : 0}</th>

      <Link to='/groupStatement'>
      <th>{'statement'}</th>
      </Link>
    </tr>

)
}
export default Each;
