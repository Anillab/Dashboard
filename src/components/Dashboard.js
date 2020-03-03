import React from 'react';
import BarChart from './BarChart.jsx';
import LineChart from './LineChart.jsx';


 const Dashboard = () => {

    return(
      <div className="row">
       <div className="">
      <BarChart />
       </div>
       <div className="">
      <LineChart />
       </div>
      </div>
    )

}

export default Dashboard;
