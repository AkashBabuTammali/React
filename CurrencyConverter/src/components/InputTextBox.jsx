import React from 'react'
import {useId} from 'react'

function InputTextBox({label,
                       amount,
                       onAmountChange,
                       onCurrencyChange,
                       currencyOptions = [],
                       selectedCurrency = "usd",
                       amountDisable = false,
                       currencyDisable = false,
                       className = ""
}) {
  const amountInputId = useId();

  return (
    <>
        <div className={`input-text-box flex ${className}`}>
            <div className="box flex">
              <label className="grey" htmlFor={amountInputId}>{label}</label>
              <input type="number" id={amountInputId} placeholder='Amount' value={amount} onChange={(e) => { 
                console.log(e.target.value);
                onAmountChange(Number(e.target.value))
              }} disabled={amountDisable}/>
            </div>
            <div className="box flex">
              <span className="grey">Currency Type</span>
              <select value={selectedCurrency} onChange={(e)=> {
                console.log(e.target.value)
                onCurrencyChange && onCurrencyChange(e.target.value)
              }} disabled={currencyDisable}>
                {currencyOptions.map((currency)=>(
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
        </div>
    </>
  )
}

export default InputTextBox