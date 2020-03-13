import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class Notification  extends React.Component {
  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('New Contribution from Fish Sellers');
          break;
        case 'success':
          NotificationManager.success('Venture Patner Has Been Created');
          break;
        case 'warning':
          NotificationManager.warning('Pending Statement', 'Close after 3000ms', 3000);
          break;

      }
    };
  };
  render() {
     return (
       <div>
         <button className='btn btn-info'
           onClick={this.createNotification('info')}>New Contributions
         </button>
         <hr/>
         <button className='btn btn-success'
           onClick={this.createNotification('success')}>New Groups
         </button>
         <hr/>
         <button className='btn btn-warning'
           onClick={this.createNotification('warning')}>Pending Statements
         </button>
         <hr/>


         <NotificationContainer/>
       </div>
     );
   }
 }

 export default Notification;
