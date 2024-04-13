import { useState,useEffect,useCallback,useRef } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8);
  const [isNumbersAllowed,setNumbersAllowed] = useState(false);
  const [isSpecialCharsAllowed,setSpecialCharsAllowed] = useState(false);
  const [password,setPassword] = useState("");
  const copyRef = useRef(null);
  useEffect(()=>{
    const alphabets = "abcdefghijklmnopqrstuvwxyz"
    const numbers = "0123456789"
    const specialCharcters = "~!@#$%^&*()`?"
    let allowedCharacters = alphabets
    let randomPassword = "";
    if(isNumbersAllowed)
      allowedCharacters += numbers
    if(isSpecialCharsAllowed)
      allowedCharacters += specialCharcters
    
    for(let i=0;i<length;i++){
      const randomIndex = Math.floor(Math.random()*allowedCharacters.length)
      randomPassword+= allowedCharacters.charAt(randomIndex)
    }
    setPassword(randomPassword);
  },[length,isNumbersAllowed,isSpecialCharsAllowed]);

  const copyToClipboard = useCallback(()=>{
    window.navigator.clipboard.writeText(password);
    copyRef.current?.select();
  },[password])

  return (
    <>
      <div className='container flex'>
        <h2>Password Generator</h2>
        <div className='main flex'>
          <input type="text" value={password} ref={copyRef} readOnly/>
          <button onClick={copyToClipboard}>Copy</button>
        </div>
        <div className='flex gap'>
          <div>
            <input type="range" min="6" max="12" value={length} onChange={(e)=>{setLength(e.target.value)}}/>Length:{length}
          </div>
          <div>
            <input type="checkbox" id="numbersAllowed" defaultChecked={isNumbersAllowed} onChange={()=>{setNumbersAllowed(!isNumbersAllowed)}}/>
            <label htmlFor="numbersAllowed">Numbers</label>
          </div>
          <div>
            <input type="checkbox" id="SpecialCharsAllowed" defaultChecked={isSpecialCharsAllowed} onChange={()=>{setSpecialCharsAllowed(!isSpecialCharsAllowed)}}/>
            <label htmlFor="SpecialCharsAllowed">Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
