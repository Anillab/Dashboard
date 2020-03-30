import React, { Component } from 'react';
import axios from 'axios';




import {Form} from 'react-bootstrap';

import {
  Link
} from 'react-router-dom';

class AccountData extends Component {

state = {
    query: '',
    data: [],
    originalData :[]
}

handleInputChange = (event) => {
    this.setState({
        query: event.target.value
    },()=>{
})

}

getData = () => {
    axios('https://hidden-atoll-66913.herokuapp.com/api/groups')
    .then(response =>{
        console.log(response);
        this.setState({
            // data:response.data.groups,
            originalData:response.data.groups
        })
    })
}

filterArray = () => {
    let searchString = this.state.query;
    // let data = this.state.originalData;



    if(searchString.length > 0){
      const  data = this.state.originalData.filter(group => group.bankAccount === searchString);
this.setState({
   data
})
console.log(data);
    }

}
componentWillMount() {
    this.getData();
}
render() {
    return (
      <div>
      <row>
      <Form onSubmit={e=>{
        e.preventDefault();
        this.filterArray()
      }}
      >

  <Form.Group controlId="filter">

    <Form.Control type="text" placeholder="Search Group" onChange={this.handleInputChange}/>

    </Form.Group>

    <ul style={{listStyle: 'none'}}>

         {
          this.state.data.map((i) => <li><Link to={`/dashboard/groups/${i._id}`}>{i.name}</Link></li>)
     }
     </ul>
  </Form>
  </row>

  </div>

    )
  }
}

export default AccountData;
