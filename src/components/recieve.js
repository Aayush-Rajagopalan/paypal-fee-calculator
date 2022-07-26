import React, { useState } from "react";
import CurrencyInput from "react-currency-input-field";



function Recieve() {
  

  
  const [value, set_value] = useState(1) 
  const [result, set_result] = useState(1.52) 


    function process (amount) {
    const fee = (amount*0.0349)+0.49;
    const result = Number(amount) + Number(fee).toFixed(2) * 1; 
    console.log(result); 
    }

    const updateState = (e) => {
      if (e==0 || e==null) {
        set_value(1);
        set_result(1.52);
      }
      else {
      set_value(e);
      //set_result(result+1);
      const final = Number(e) + Number((e*0.0349)+0.49).toFixed(2) * 1;
      set_result(final);
      }
  }


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
                step="0.01"
                decimalsLimit={2}
                //onChange={updateState}
                //onValueChange={(value, name) => { process(value, name)}}
                onValueChange={(e) => {console.log(e); updateState(e)}}

        /> 
        </div>
        <div className="grid-right">
       <p className="result">
        To Recieve <br/> <span className="blue"> ${value || 1}</span>,<br/> Sender would<br/> have to pay <br/><span className="red"> ${result || 1.52}</span>
        </p>
        </div>
      </div>
    </div>
  );
}

export default Recieve;