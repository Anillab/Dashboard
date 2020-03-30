import React from "react";
import axios from 'axios';
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class LinePage extends React.Component {
  constructor(props){
    super(props);
    this.state={Groups:{}};
  }
  componentDidMount(){
    axios.get(`https://hidden-atoll-66913.herokuapp.com/api/groups`)
             .then(res=>{
               const total = res.data;
               console.log('---total value----', total);
               let groupName=[];
               let totalCon=[];
               total.groups.forEach(group=>{
                 groupName.push(group.name);
                 totalCon.push(group.contributions.length);
               });
               console.log(totalCon)
               console.log(groupName)
               this.setState({
                 Groups:{
                   labels:groupName,
                   datasets:[
                     {
                       label:'Groups Total Contributions',
                       data:totalCon
                     }
                   ]
                 }

               })
             }).catch(err => console.log(err));
  }
  render(){
    return(
      <div>
      <Line
      data={this.state.Groups}
      />
      </div>
    )
  }
}


export default LinePage;
