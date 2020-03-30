import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Behavior from './Behaivour.jsx';
const API_URL='https://hidden-atoll-66913.herokuapp.com/api';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

class SimpleTable extends React.Component{
constructor(props){
  super(props);
  this.state={
    group:{},
    contribution:[]
  }

}
componentDidMount(){
  if(this.props !== null){
      console.log(this.props);
  }


  let groupId = this.props.match.params.id;
  axios.get(`${API_URL}/groups/${groupId}`)
      .then(res=>{
        this.setState({group: res.data}, () => {
          this.state.group.contributions.map(value => {
            return axios.get(`${API_URL}/contributions/${value._id}`)
          })
        })
      })
      .then(resData => {
        this.setState({contribution: [...this.state.contribution, resData.data]})
      })
      .catch(function (error){
        console.log(error);
      })
}

render(){
  console.log(this.props);
return (
  <div>
  <div>
  <TableContainer component={Paper}>
    <Table  aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Date of Contribution</TableCell>
          <TableCell align="right">Title of Contribution</TableCell>
          <TableCell align="right">Members Contributed</TableCell>
          <TableCell align="right">Amount Contributed</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {this.state.contribution.map(contribution => (
          <TableRow key={contribution.title}>
            <TableCell component="th" scope="row">
            a
            </TableCell>
            <TableCell align="right">a</TableCell>
            <TableCell align="right">a</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  <div>
  <Behavior />
  </div>
  </div>
)};

}

export default SimpleTable;
