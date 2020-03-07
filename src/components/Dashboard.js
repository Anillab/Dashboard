import React from 'react';
import BarChart from './BarChart.jsx';
import LineChart from './LineChart.jsx';
import AccountData from './search.jsx';

 const Dashboard = () => {

    return(
      <div className="container">
        <div class="row">
          <AccountData />
        </div>
      <div className="row">
       <div className="col-md-3">
      <BarChart />
       </div>
       <div className="col-md-3">
      <LineChart />
       </div>
       <div className="col-md-3">
      <LineChart />
       </div>
       </div>
      </div>
    )

}

export default Dashboard;
