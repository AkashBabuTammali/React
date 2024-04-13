import { useState } from 'react'
import {InputTextBox} from './components/index.js'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'
import './stylesheets/App.css'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);
  const swap = () =>{
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    setConvertedAmount(amount * Number(currencyInfo[to]))
  }

  return (
    <>
      <div className='container'>
        <div className='currency-converter flex'>
          <InputTextBox 
            label="From"
            amount={amount}
            onAmountChange={(amount)=>setAmount(amount)}
            currencyOptions={options}
            onCurrencyChange={(currency)=>setFrom(currency)}
            selectedCurrency={from}
            amountDisable={false}
            currencyDisable={false}
          />
          <button className="swap" onClick={()=>{swap()}}>Swap</button>
          <InputTextBox 
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency)=>setTo(currency)}
            selectedCurrency={to}
            amountDisable={true}
            currencyDisable={false}
          />
        </div>
        <button onClick={()=>{convert()}}>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
      </div>
    </>
  )
}

export default App
