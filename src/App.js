import React,{ Component } from 'react';
import Input from './components/Input.jsx';
import LoginContainer from './container/LoginContainer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar.jsx';
class App extends Component {
  render(){
    return(
      <>
      <NavigationBar />
      <div className="col-md-8">

       <LoginContainer />
     </div>
     </>
    )
  }
}


export default App;
