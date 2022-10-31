import React, { Component } from 'react'
import Input from './Input'


 class FocusInput extends Component {
    constructor(props) {
      super(props)
      this.compnentRef=React.createRef()
    }
  
    clickHandler=()=>{
      console.log("clickHandler before***")
        this.compnentRef.current.focusInput()
        console.log("clickHandler  after***")
    }
    render() {
    return (
      <div>
        <Input ref={this.compnentRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput
