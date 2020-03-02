import React, { Component } from 'react';
import Dashboard from '../components/Dashboard';
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
    <div className='col-4'>
      <ul>
        <li>
          <Link to='/dashboard'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/dashboard/a'>
            A
          </Link>
        </li>
        <li>
          <Link to='/dashboard/b'>
            B
          </Link>
        </li>
      </ul>
    </div>

    <div className='col-8'>
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
