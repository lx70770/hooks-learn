import React, { Component, useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });

  const onResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    });
  };

  useEffect(() => {
    document.title = count;
  });

  // useEffect 返回值可以作清除副作用的操作  第二个参数可以控制useEffect是否重新执行
  useEffect(() => {
    window.addEventListener("resize", onResize, false);
    return () => {
      window.removeEventListener("resize", onResize, false);
    };
  }, []);
  return (
    <button onClick={() => setCount(count + 1)}>
      Click: {count}
      Size: {size.width}*{size.height}
    </button>
  );
}

export default App;
