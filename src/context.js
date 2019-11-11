import React, { Component, createContext } from 'react'
import logo from './logo.svg'
import './App.css'

const BatteryContext = createContext(90)

class Leaf extends Component {
  static contextType = BatteryContext

  render() {
    const battery = this.context
    return <h1>Battery: {battery}</h1>
  }
}

class Middle extends Component {
  render() {
    return <Leaf />
  }
}

class ContextDemo extends Component {
  render() {
    return (
      <BatteryContext.Provider value={60}>
        <Middle />
      </BatteryContext.Provider>
    )
  }
}

export default ContextDemo
