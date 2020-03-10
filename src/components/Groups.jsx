import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';



const Group=(props) =>{
  return(
    <tr>
      <th>{props.obj.name}</th>
      <th>{props.obj.description}</th>
      <th>{props.obj.bankAccount}</th>
      <th>{props.obj.members.length}</th>
      <Link to='/groupStatement'>
      <th>{'statement'}</th>
      </Link>


    </tr>
)
}
export default Group;
