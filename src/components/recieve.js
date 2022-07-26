import React, { useState } from "react";
import CurrencyInput from "react-currency-input-field";



function Recieve() {
  const [value, set_value] = useState(1) 
  const [result, set_result] = useState(1.52) 

    const updateState = (e) => {
      if (e==0 || e==null) {
        set_value(1);
        set_result(1.52);
      } else {
        let final = Number(e) + Number((e*0.0349)+0.49).toFixed(2) * 1;
      set_value(e);
      set_result(final);
      console.log(final);
      }
  }


  return (
    <div className="calc">
      <h1 className="title">Paypal Fee Calculator</h1>
      <h2 className="subtitle">To Recieve</h2>
      <div className="grid">
        <div className="grid-left">
        
        <CurrencyInput
                intlConfig={{ locale: 'en-US', currency: 'USD' }}
                id="input-example"
                className="amount"
                name="input-name"
                placeholder="Please enter a number"
                step="0.01"
                decimalsLimit={2}
                onValueChange={(e) => {updateState(e)}}

        /> 
        </div>
        <div className="grid-right">
       <p className="result">
        You Recieve <br></br>
       <span className="blue"> ${value}</span><br/><br/>Sender pays <br/><span className="red"> ${result}</span>
        </p>
        </div>
      </div>
    </div>
  );
} 

export default Recieve;