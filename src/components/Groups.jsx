import React from 'react';

import {
  Link, useHistory
} from 'react-router-dom';



const Group=(props) =>{
  let history = useHistory();
  console.log(history)
  return(
    <tr onClick={() => history.push(`/dashboard/groups/${props.obj._id}`)}>
      <th>{props.obj.name}</th>
      <th>{props.obj.description}</th>
      <th>{props.obj.bankAccount}</th>
      <th>{props.obj.frequency}</th>
      <th>{props.obj.members.length}</th>

      

    </tr>


)
}
export default Group;
