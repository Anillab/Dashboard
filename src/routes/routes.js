import React from 'react';
import Dashboard from '../components/Dashboard';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

const routes = [
  {
    path:'/dashboard',
    exact:true,
    sidebar: () => <span>Home</span>,
    main: <Dashboard />
  },
  {
    path:'/dashboard/a',
    exact:true,
    sidebar: () => <span>Home</span>,
    main: () => <h1>Aaa</h1>
  },
  {
    path:'/dashboard/b',
    exact:true,
    sidebar: () => <span>Home</span>,
    main: () => <h1>B</h1>

  },
  {
    path:'/dashboard/logout',
    exact:true,
    sidebar: () => <span>Home</span>,
    main: () => <h1>You're Logged Out</h1>

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
        <Link to='/dashboard/a'>
          <ListItem button>
            <ListItemText>Groups</ListItemText>
          </ListItem>
        </Link>
        <Link to='/dashboard/b'>
          <ListItem button>
            <ListItemText>Members</ListItemText>
          </ListItem>
        </Link>
        <Link to='/dashboard/logout'>
          <ListItem button>
            <ListItemText>Log Out</ListItemText>
          </ListItem>
        </Link>
      </List>
    </div>

    <div className='content'>
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
