import { useState } from 'react';
import './App.css'

function App() {
  const [counter,setCounter] = useState(10);
  const increment = ()=>{
    setCounter(counter+1);
  }
  const decrement = ()=>{
    setCounter(counter-1);
  }
  return (
    <>
      <h1>Learning React from Hitesh Choudary</h1>
      <p>Counter Value:{counter}</p>
      <button onClick={increment}>Increment</button><br />
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App;
