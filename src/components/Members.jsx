import React from 'react';



const Member=(props) =>{
  return(
    <tr>
      <th>{props.obj.name}</th>
      <th>{props.obj.phoneNumber}</th>
      <th>{props.obj.contributions.length}</th>


    </tr>
)

}
export default Member;
