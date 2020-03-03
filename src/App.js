import React,{ Component } from 'react';
import Input from './components/Input.jsx';
import LoginContainer from './container/LoginContainer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
// import Dashboard from './components/Dashboard';
import MainRoute from './routes/routes.js'

const MainHome = props => {
  return (
    <div className='container'>
    <div className="col-md-8">

     <LoginContainer {...props} />
    </div>

   </div>
  )
}
class App extends Component {
  render(){
    return(
      <>
      <Router>
        <NavigationBar />
       <Switch>
       <Route path='/' exact component={MainHome}/>
        <Route path='/dash' component={MainRoute}/>
       </Switch>
     </Router>
     </>
    )
  }
}


export default App;
