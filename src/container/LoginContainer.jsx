import React,{Component} from 'react';

import Input from '../components/Input';
import Button from '../components/Button'


class LoginContainer extends Component{
  constructor(props){
    super(props);

    this.state={
       User:{
        code:'',
        password:''
      },
    }
    this.handleFormSubmit=this.handleFormSubmit.bind(this);
    this.handleClearForm=this.handleClearForm.bind(this);
    this.handlePass=this.handlePass.bind(this);
    this.handleInput=this.handleInput.bind(this);
  }
  handleFormSubmit(e){
    e.preventDefault();
    let userData=this.state.User;
    fetch('http://example.com',{
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(response => {
        response.json().then(data =>{
          console.log("Successful" + data);
        })
    })
  }
  handleClearForm(e){
    e.preventDefault();
    this.setState({
      User:{
        code:'',
        password:''
      },
    })
  }
  handlePass(e){
    let value =e.target.value;
    this.setState(prevState =>({
      User:{...prevState.User,password:value}
    }),()=>console.log(this.state.User))
  }
  handleInput(e){
    let value =e.target.value;
    let name=e.target.name;
  this.setState(prevState =>({
    User:{...prevState.User,[name]:value
    }
  }),()=>console.log(this.state.User))
  }
  render(){
    return(

      <form className="contaier-fluid" onSubmit={this.handleFormSubmit}>
       <Input inputType={'text'}
              title={'Instution Code'}
              name={'code'}
              value={this.state.User.name}
              placeholder={'Enter The Instution Code'}
              handleChange={this.handleInput}


       /> {/* MFI code*/}
       <Input inputType={'number'}
              title={'Password'}
              name={'password'}
              value={this.state.User.name}
              placeholder={'Enter  Password'}
              handleChange={this.handlePass}
       /> {/* MFI password*/}
       <Button
         action={this.handleFormSubmit}
         type={'primary'}
         title={'Submit'}
         style={buttonStyle}
        />{/* Submit*/}
       <Button
       action ={this.handleClearForm}
       type={'secondary'}
       title={'Clear'}
       style={buttonStyle}

       />{/* Clear the form*/}

      </form>
    );
  }
}
const buttonStyle={
  margin:'10px 10px 10px 10px'
}



export default LoginContainer;
