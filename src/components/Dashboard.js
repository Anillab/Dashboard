import React from 'react';
import BarChart from './BarChart.jsx';
import LineChart from './LineChart.jsx';

 const Dashboard = () => {

    return(
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
    )

}

export default Dashboard;
