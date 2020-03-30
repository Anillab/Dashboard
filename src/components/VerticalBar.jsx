import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import axios from 'axios';
class VerticalPage extends React.Component {
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
               let amountCon=[];
               total.groups.forEach(group=>{
                 groupName.push(group.name);
                 amountCon.push(group.amount);
               });
               console.log(amountCon)
               console.log(groupName)
               this.setState({
                 Groups:{
                   labels:groupName,
                   datasets:[
                     {
                       label:'Groups Total Contributions',
                       data:amountCon
                     }
                   ]
                 }

               })
             }).catch(err => console.log(err));
  }

  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Bar chart</h3>
        <Bar data={this.state.Groups}/>
      </MDBContainer>
    );
  }
}


export default VerticalPage;
