import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Orders from "../Orders/Orders";

class Profile extends Component {
  state = {};
  render() {
    return (
      <Aux>
        <Orders />
      </Aux>
    );
  }
}

export default Profile;
