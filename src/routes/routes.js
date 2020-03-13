import React from 'react';
import Dashboard from '../components/Dashboard';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import InfoMembers from '../constants/membersApi.jsx';
import InfoGroup from '../constants/groupsApi.js';
import GroupStatement from '../components/GroupStatement.jsx';
import MemberStatement from '../components/MemberStatement.jsx';
import Notification from '../components/Notifications.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

const routes = [
  {
    path:'/dashboard',
    exact:true,
    sidebar: () => <span>Home</span>,
    main: <Dashboard />
  },
  {
    path:'/dashboard/groups',
    exact:true,
    sidebar: () => <span>Home</span>,
    main: <InfoGroup />
  },
  {
    path:'/dashboard/members',
    exact:true,
    sidebar: () => <span>Home</span>,
    main: <InfoMembers />

  },
  {
    path:'/logout',
    exact:true,
    sidebar: () => <span>Home</span>,

  },
  {
    path:'/groupStatement',
    exact:true,
    main: <GroupStatement />

  },
  {
    path:'/notifications',
    exact:true,
    sidebar: () => <span>Home</span>,
    main: <Notification />
  },

  {
    path:'/memberStatement',
    exact:true,
    main: <MemberStatement />

  }
]

const MainRoute = (props) => {
  return (
    <Router>
    <div className='row'>
    <div className='col-md-2' style={{ overflow: 'scroll', minHeight: '100vh' }}>
      <List disablePadding dense>
        <Link to='/dashboard'>
          <ListItem button>
            <ListItemText>Dashboard</ListItemText>
          </ListItem>
        </Link>
        <Link to='/dashboard/groups'>
          <ListItem button>
            <ListItemText>Groups</ListItemText>
          </ListItem>
        </Link>
        <Link to='/dashboard/members'>
          <ListItem button>
            <ListItemText>Members</ListItemText>
          </ListItem>
        </Link>
        <Link to='/notifications'>
          <ListItem button>
            <ListItemText>Notifications</ListItemText>
          </ListItem>
        </Link>
        <Link to='/'>
          <ListItem button>
            <ListItemText>Log Out</ListItemText>
          </ListItem>
        </Link>
      </List>
    </div>

    <div className='col-md-10'>
      <Switch>
        {routes.map((route, index) => {
        return  <Route key={index} path={route.path} exact={route.exact} children={route.main}/>
        })}
      </Switch>
    </div>
    </div>

    </Router>
  )
}

export default MainRoute;
