import React, { Component } from 'react'

 class Input extends Component {
    constructor(props) {
      super(props)
      this.inputRef=React.createRef()
    }
    onEscape = function (action) {
      window && window.addEventListener('keydown', (e) => {
          if (e.key === "Escape") {
              action();
          };
      });
    }; 

 focusInput(){
    console.log("Focus Input method before***")
    this.inputRef.current.focus()
    console.log("Focus Input method after***")

 }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}/>
      </div>
    )
  }
}

export default Input
