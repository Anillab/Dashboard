import React from 'react';



const Group=(props) =>{
  return(
    <tr>
      <th>{props.obj.name}</th>
      <th>{props.obj.description}</th>
      <th>{props.obj.bankAccount}</th>
      <th>{props.obj.members.length}</th>


    </tr>
)
}
export default Group;
