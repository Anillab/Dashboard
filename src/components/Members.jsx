import React from 'react';
import {
  Link,useHistory
} from 'react-router-dom';



const Member=(props) =>{
  let history = useHistory();
  return(
    <tr onClick={() => history.push(`/dashboard/members/${props.obj._id}`)}>
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
