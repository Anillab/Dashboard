import React ,{Component} from 'react';
import axios from 'axios';
import Member from '../components/Members.jsx';
import {Table} from 'react-bootstrap';


export default class InfoMembers extends Component {

    constructor(props) {
        super(props);
        this.state = { memberCollection: [] };
    }

    componentDidMount(){
      axios.get('https://hidden-atoll-66913.herokuapp.com/api/members')
            .then(res =>{
              console.log(res.data);
              this.setState({memberCollection:res.data.members})
            })
            .catch(function (error) {
              console.log(error);
            })
    }

    membersTable(){
      console.log(this.state.memberCollection);
      return this.state.memberCollection.map((data,i)=>{
        return <Member obj={data} key={i} />;
      });
    }
    render(){
      return(
        <Table striped bordered hover>
          <thead>
            <tr>



<th> Name</th>
              <th>Phome Number</th>
              <th>Total Contributions</th>
              <th>statement</th>


            </tr>
          </thead>
          <tbody>
            {this.membersTable()}
          </tbody>
        </Table>
      )
    }
}
