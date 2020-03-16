import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Each from '../components/groupEach.jsx';
import {Table} from 'react-bootstrap';


const DetailGroup = () => {
  const [groupDetails, setGroupDetails] = useState({})
      const {id} = useParams()
      console.log(id)
  useEffect(() => {
    const fetchGroup = groupId => {
      axios.get(`https://hidden-atoll-66913.herokuapp.com/api/groups/${groupId}`).then(res => {
        console.log(res.data);
        setGroupDetails({...groupDetails, ...res.data.group})
      }).catch(error =>{
        console.log(error);
      })

    };

    fetchGroup(id);
  }, [])

    return(

      <Table striped bordered hover>
        <thead>
          <tr>



            <th> Name</th>
            <th>Description</th>
            <th> Bank Account</th>
            <th>Contribution Frequency</th>
            <th>Total Members</th>
            <th>Staments</th>


          </tr>
        </thead>
        <tbody>
        <Each obj={groupDetails} key={groupDetails.id}/>
        </tbody>
      </Table>

    )


}
export default DetailGroup;
