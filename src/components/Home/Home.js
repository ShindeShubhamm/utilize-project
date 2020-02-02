import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import Aux from "../../hoc/Aux";
import Classes from "../../App.css";

class Home extends Component {
  render() {
    const responseGoogle = response => {
      // console.log(response);
      this.props.onLogin(response);
    };

    return (
      <Aux>
        <div className={Classes.login_info}>
          <h3 className={Classes.info}>Use your Google Account to Login!</h3>
          <GoogleLogin
            clientId="883672942112-gq4b6nsfhauh2cjjnnkcahlsq33uf1r8.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </Aux>
    );
  }
}

export default Home;
