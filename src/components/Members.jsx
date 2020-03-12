import React from 'react';
import {
  Link
} from 'react-router-dom';



const Member=(props) =>{
  return(
    <tr>
      <th>{props.obj.name}</th>
      <th>{props.obj.phoneNumber}</th>
      <th>{props.obj.contributions.length}</th>
      <Link to='/memberStatement'>
      <th>{'statement'}</th>
      </Link>


    </tr>
)

}
export default Member;
