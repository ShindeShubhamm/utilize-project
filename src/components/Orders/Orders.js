import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Data from "../../data/DummyData.json";
import Classes from "../../App.css";

class Orders extends Component {
  state = {};
  render() {
    return (
      <Aux>
        <div className="badge badge-pill badge-primary">Orders</div>
        <div className={Classes.orderbox}>
          {Data.map(data => {
            return (
              <Aux key={data.id}>
                <button className={Classes.indi}>
                  {data.customer_name}
                  <span className="badge badge-warning m-1">
                    {data.quantity}
                  </span>
                </button>
              </Aux>
            );
          })}
        </div>
      </Aux>
    );
  }
}

export default Orders;
