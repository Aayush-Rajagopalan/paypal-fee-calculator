import React from "react";
import CurrencyInput from "react-currency-input-field";

function Recieve() {
    const amount = 10;
    const fee = (amount*0.0349)+0.49;
    const result = amount + fee.toFixed(2) * 1;

  return (
    <div className="calc">
      <h1>Paypal Fee Calculator</h1>
      <h2>To Recieve</h2>
      <div className="grid">
        <div className="grid-left">
        <CurrencyInput
                intlConfig={{ locale: 'en-US', currency: 'USD' }}
  id="input-example"
  className="amount"
  name="input-name"
  placeholder="Please enter a number"
  defaultValue={0}
  step="0.01"
  decimalsLimit={2}
  onValueChange={(value, name) => console.log(value, name)}
/>
            <button className="calculate-button">Calculate</button>
        </div>
        <div className="grid-right">
       <p className="result">
        To Recieve <span className="blue"> ${amount}</span>, Sender would have to pay <span className="red"> ${result}</span>
        </p>
        </div>
      </div>
    </div>
  );
}

export default Recieve;