import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';


const responseGoogle = (response) => {
  console.log(response);
}

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: {},
    }
    // console.log(this.state.login.picture);
    // console.log(responseFacebook());
  };

  responseFacebook2 = (response) => {
    // console.log(response);
    // console.log(response.email);
    this.setState({
      login: response,
    });
  }

   render() {
      return (
         <div>
            <h3>Loged in as {this.state.login.name}</h3><br /><br />

            <FacebookLogin
               appId="1011435669032549"
               appSecret="eb70a53026dc3130e56e337180d11863"
               autoLoad={true}
               fields="name,email,picture"
               onClick={null}
               callback={this.responseFacebook2} /><br /><br />

             <GoogleLogin
                clientId="113340054458-e1v1fohvc1ajldmqvms7lmuivhj94u73.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              />

         </div>
      );
   }
}
export default Login;
