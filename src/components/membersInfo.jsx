import React , {useEffect,useState}from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import MembEach from './membEach.jsx';
import {Table, Spinner} from 'react-bootstrap';

const API_URL='https://hidden-atoll-66913.herokuapp.com/api';

const DetailMembers = () => {
  const [memberDetails, setMemberDetails] = useState({})
  const {id}=useParams()
console.log(id);
  useEffect(()=>{
    const fetchMember=memberId=>{
    const url=`${API_URL}/members/${memberId}`;
    axios.get(url)
    .then((res)=>{
      console.log(res.data.member)
      setMemberDetails({...memberDetails, ...res.data.member})
    }).catch(error=>{
      console.log(error)
    })
  };
  fetchMember(id);


},[])
return(
  <Table striped bordered hover>
    <thead>
      <tr>



        <th> Name</th>
        <th>PhoneNumber</th>
        <th> Groups</th>
        <th>Staments</th>


      </tr>
    </thead>
    <tbody>
    {memberDetails !== null ? <MembEach obj={memberDetails} key={memberDetails.id}/> :
    <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
    </Spinner>
    }

    </tbody>
  </Table>


)
}
export default DetailMembers;
