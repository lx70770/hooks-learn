import React, { Component, lazy, Suspense } from 'react'
import './App.css'

const About = lazy(() => import(/*webpackChunkName:"about"*/ './About.js'))

class App extends Component {
  render() {
    return (
      <Suspense fallback={<span>loading...</span>}>
        <About />
      </Suspense>
    )
  }
}

export default App
