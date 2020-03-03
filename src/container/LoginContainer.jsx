import React,{Component} from 'react';

import Input from '../components/Input';
import Button from '../components/Button'


class LoginContainer extends Component{
  constructor(props){
    super(props);

    this.handleFormSubmit=this.handleFormSubmit.bind(this);
  }
  handleFormSubmit(e){
    e.preventDefault();
    // let userData=this.state.User;
    // fetch('http://example.com',{
    //     method: "POST",
    //     body: JSON.stringify(userData),
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //   }).then(response => {
    //     response.json().then(data =>{
    //       console.log("Successful" + data);
    //     })
    // })
    this.props.history.push('/dash')
  }

  render(){
    return(

      <form className="contaier-fluid" onSubmit={this.handleFormSubmit}>
       <Input inputType="text"
              title="Instution Code"
              name="code"
              value="assafasaf"
              // placeholder={'Enter The Instution Code'}
              handleChange={this.handleInput}


       /> {/* MFI code*/}
       <Input inputType="password"
              title="Password"
              name="password"
              value="safafdsgdf"
              // placeholder={'Enter  Password'}
              handleChange={this.handlePass}
       /> {/* MFI password*/}
       <Button
         action={this.handleFormSubmit}
         type={'primary'}
         title={'Submit'}
         style={buttonStyle}
        />{/* Submit*/}

      </form>
    );
  }
}
const buttonStyle={
  margin:'10px 10px 10px 10px'
}



export default LoginContainer;
