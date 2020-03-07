import React ,{Component} from 'react';
import axios from 'axios';
import Group from '../components/Groups.jsx';
import {Table} from 'react-bootstrap';


export default class InfoGroup extends Component {

    constructor(props) {
        super(props);
        this.state = { groupCollection: [] };
    }

    componentDidMount(){
      axios.get('https://68925b41.ngrok.io/api/groups')
            .then(res =>{
              console.log(res.data);
              this.setState({groupCollection:res.data.groups})
            })
            .catch(function (error) {
              console.log(error);
            })
    }

    groupTable(){
      console.log(this.state.groupCollection);
      return this.state.groupCollection.map((data,i)=>{
        return <Group obj={data} key={i} />;
      });
    }
    render(){
      return(
        <Table striped bordered hover>
          <thead>
            <tr>



<th> Name</th>
              <th>Description</th>
              <th>Account</th>
              <th>Frequency</th>

            </tr>
          </thead>
          <tbody>
            {this.groupTable()}
          </tbody>
        </Table>
      )
    }
}
