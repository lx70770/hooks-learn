import React, { Component, useState } from 'react'
import './App.css'

function App(props) {
  // useState可以传入函数来延迟初始化默认值 该函数只会被执行一次
  const [count, setCount] = useState(() => {
    console.log('useState')
    return props.defaultCount || 0
  })
  return <button onClick={() => setCount(count + 1)}>Click: {count}</button>
}

export default App
