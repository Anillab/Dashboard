import React, { Component } from 'react';
import axios from 'axios';


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
        <div className="searchForm">
            <form onSubmit={e => {
              e.preventDefault();
              this.filterArray()
            }}
            >
                <input type="text" id="filter" placeholder="Search for..."  onChange={this.handleInputChange}/>
            </form>
                <div>
                {
                    this.state.data.map((i) => <p>{i.name}</p>)
                }
               </div>
        </div>
    )
  }
}

export default AccountData;
