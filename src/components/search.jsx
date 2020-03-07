import React, { Component } from 'react';

class AccountData extends Component {

state = {
    query: '',
    data: [],
    searchString:[]
}

handleInputChange = (event) => {
    this.setState({
        query: event.target.value
    },()=>{
  this.filterArray();
})

}

getData = () => {
    fetch('https://ff543a0a.ngrok.io/api/groups')
    .then(response =>{
        // console.log(responseData)
        this.setState({
            data:response.data,
            searchString:response.data
        })
    })
}

filterArray = () => {
    let searchString = this.state.query;
    let responseData = this.state.data;



    if(searchString.length > 0){
        // console.log(responseData[i].name);
        responseData = responseData.filter(searchString);
this.setState({
   responseData
})
    }

}
componentWillMount() {
    this.getData();
}
render() {
    return (
        <div className="searchForm">
            <form>
                <input type="text" id="filter" placeholder="Search for..."  onChange={this.handleInputChange}/>
            </form>
                <div>
                {
                    this.state.responseData.map((i) =>
                        <p>{i.name}</p>
                    )
                }
               </div>
        </div>
    )
  }
}

export default AccountData;
