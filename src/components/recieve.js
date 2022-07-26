import React from "react";

function Recieve() {

  return (
    <div className="calc">
      <h1>Paypal Fee Calculator</h1>
      <h2>To Recieve</h2>
      <div className="grid">
        <div className="grid-left">
            <input type="currency"  placeholder="Amount"  className="amount" /> <br />
            <button className="calculate-button">Calculate</button>
        </div>
        <div className="grid-right">
        To Recieve [number], they must pay [fee]
        </div>
      </div>
    </div>
  );
}

export default Recieve;