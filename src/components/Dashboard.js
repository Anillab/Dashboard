import React from 'react';
import {Tabs, Tab} from '@material-ui/core';
import Iframe from 'react-iframe';


 const Dashboard = () => {

    return(
      <div>
           <Tabs>
   <Tab label="System & Database Monitoring" >
     <Iframe url="http://localhost:3000/dashboard/db/prometheus-stats-working?from=1489925695713&to=1489925995713" />
   </Tab>

 </Tabs>
       </div>
    )

}

export default Dashboard;
