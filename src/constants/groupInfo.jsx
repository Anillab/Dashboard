import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Each from '../components/groupEach.jsx';
import {Table, Card, Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Link
} from 'react-router-dom';


const API_URL='https://hidden-atoll-66913.herokuapp.com/api';

const DetailGroup = () => {
  const [groupDetails, setGroupDetails] = useState({})
  const [member, setMember] = useState([])

  const {id} = useParams()
  console.log(id)

  useEffect(() => {
    const fetchGroup = groupId => {
      axios.get(`${API_URL}/groups/${groupId}`)
      .then(res => {
        setGroupDetails({...groupDetails, ...res.data.group})
      })
      .catch(error =>{
        console.log(error);
      })

    };

    fetchGroup(id);

  }, [])

  useEffect(() => {
    const fetchMember = async memberId => {
      try{
         const res = await axios.get(`${API_URL}/members/${memberId}`)
         return res.data.member
      } catch(err){
          console.log(err);
      }
    }

    if(groupDetails.members){
      Promise.all(groupDetails.members.map(memberId => fetchMember(memberId))).then(value => setMember([...member, value])) ;
    }

  }, [groupDetails])

  console.log('-------member state----------', member);
    return(
      <>
      <Card>
        <Card.Header>
          {groupDetails.name}
        </Card.Header>
        <Card.Body>
          {groupDetails.description}
        </Card.Body>
        <Card.Header>
        <p><Link to={`/groupStatement/${groupDetails._id}`}>{'statement'}</Link></p>

        </Card.Header>
      </Card>

      <Table striped bordered hover>
        <thead>
        <tr>
         <td colSpan='4'>
         Members
         </td>
        </tr>
          <tr>

            <th> Name</th>
            <th>Phone Number</th>
            <th>Total Contribution</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {member.length !== 0 ? member[0].map(memberDetail =>   <Each obj={memberDetail} key={memberDetail.userId}/>) : <Spinner className="mx-auto text-center" animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner>}

        </tbody>
      </Table>
      </>
    )


}
export default DetailGroup;
