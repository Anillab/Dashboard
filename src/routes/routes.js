import React, { Component } from 'react';
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
    main: Dashboard
  },
  {
    path:'/dashboard/a',
    exact:true,
    sidebar: () => <span>Home</span>,
    main: () => <h1>A</h1>
  },
  {
    path:'/dashboard/b',
    exact:true,
    sidebar: () => <span>Home</span>,
    main: () => <h1>B</h1>
  },
]

const MainRoute = (props) => {
  return (
    <Router>
    <div className='row'>
    <div className='col-md-4' style={{ overflow: 'scroll', minHeight: '100vh' }}>
      <List disablePadding dense>
        <Link to='/dashboard'>
          <ListItem button>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </Link>
        <Link to='/dashboard/a'>
          <ListItem button>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </Link>
        <Link to='/dashboard/b'>
          <ListItem button>
            <ListItemText>Home</ListItemText>
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
