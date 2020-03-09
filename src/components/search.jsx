import React, { Component } from 'react';
import axios from 'axios';
import {Form,Group,Control} from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
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
    axios('https://68925b41.ngrok.io/api/groups')
    .then(response =>{
        console.log(response);
        this.setState({
            data:response.data.groups,
            originalData:response.data.groups
        })
    })
}

filterArray = () => {
    let searchString = this.state.query;
    let data = this.state.originalData;



    if(searchString.length > 0){
        data = data.filter(group => group.bankAccount === searchString);
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
      <Form onSubmit={e=>{
        e.preventDefault();
        this.filterArray()
      }}
      >

  <Form.Group controlId="filter">

    <Form.Control type="text" placeholder="Search Group" onChange={this.handleInputChange}/>

  </Form.Group>
  </Form>
  <div>
       {
        this.state.data.map((i) => <Link>{i.name}</Link>)
   }
   </div>
  </div>
        // <div className="searchForm">
        //     <form onSubmit={e => {
        //       e.preventDefault();
        //       this.filterArray()
        //     }}
        //     >
        //         <input type="text" id="filter" placeholder="Search for..."  onChange={this.handleInputChange}/>
        //     </form>
        //         <div>
        //         {
        //             this.state.data.map((i) => <Link>{i.name}</Link>)
        //         }
        //        </div>
        // </div>
    )
  }
}

export default AccountData;
