import React, { Component } from "react";

class UserGreetings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {

    return this.state.isLoggedIn && <div>Welcome Rahul</div>
    // return this.state.isLoggedIn ? (
    //   <div>Hello Rahul</div>
    // ) : (
    //   <div>Hello Guest</div>
    // );

    //     if(this.state.isLoggedIn)
    //     return (
    //       <div>
    //         Hello Vishwas
    //       </div>
    //     )
    //     else
    //     return(
    //         <div>
    //             Hello Guest
    //         </div>
    //     )
    //
  }
}
export default UserGreetings;
