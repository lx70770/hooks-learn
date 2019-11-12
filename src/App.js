import React, { Component, useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [size, setSize] = useState({
    
  })
  useEffect(() => {
    document.title = count
  })
  return <button onClick={() => setCount(count + 1)}>Click: {count}</button>
}

export default App
