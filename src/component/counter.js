import React, { Component } from 'react'
import "./counter.css"
export class counter extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    Increment(){
        this.setState((Previousstate)=>({
            count:Previousstate.count+1
        }))
    }

    Decrement(){
        this.setState((Previousstate)=>({
            count:Previousstate.count-1
        }))
    }

    reset(){
        this.setState((Previousstate)=>({
            count:0
        }))
    }
  render() {
    return (
      <div className='container'>
        <h3>{this.state.count}</h3>
        <div className='btns'>
        <button onClick={()=>this.Increment()}>+</button>
        <button onClick={()=>this.Decrement()}>-</button>
        <button onClick={()=>this.reset()}>Reset</button>
        </div>
      </div>
    )
  }
}

export default counter