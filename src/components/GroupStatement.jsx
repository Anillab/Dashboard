import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
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

const SimpleTable = () => {
  const [group, setGroup] = useState({});
  const [contributions, setContribution] = useState([])

  let {id} = useParams();

  useEffect(() => {
    const fetchGroup = () => {
      axios.get(`${API_URL}/groups/${id}`)
          .then(res => {
            console.log(res.data);
            return setGroup({...group, ...res.data.group});
          }).catch(function (error){
            console.log(error);
          })
    }

    fetchGroup();

  }, [])

  useEffect(() => {

    const fetchContributions = async id => {
      try{

        const res = await axios.get(`${API_URL}/contributions/${id}`)
        console.log(res.data.contribution)
        return res.data.contribution;
      }catch(err){
        console.log(err)
      }
    }

    if(group.contributions){
      Promise.all(group.contributions.map(element => fetchContributions(element))).then(res => {
        setContribution([...contributions, res])
      }).catch(err => console.log(err))
    }

  }, [group])

  console.log(group)
  console.log('--state value--', contributions)
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
            <TableRow>
              <TableCell component="th" scope="row">
              a
              </TableCell>
              <TableCell align="right">a</TableCell>
              <TableCell align="right">a</TableCell>
            </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <div>
    <Behavior />
    </div>
    </div>
  );

};

export default SimpleTable;
