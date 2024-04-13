import { useState } from 'react';
import Button from "./Button.jsx";
import './App.css';

function App() {
  const[color,setColor] = useState("white");
  return (
    <>
      <div className='fillScreen' style={{backgroundColor:color}}></div>
      <div className='banner'>
        <Button colorName="Red" color="red" onClick={()=>{setColor("red")}}/>
      </div>
    </>
  );
}

export default App
