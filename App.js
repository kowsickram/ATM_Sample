import "./styles.css";
import { useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState([]);
  var message = `Account Balance $ ${amount}`;
  // function deposit(e) {
  //   e.preventDefault();
  //   setAmount(amount + balance);
  // }
  // function withdraw(e) {
  //   e.preventDefault();
  //   setAmount(amount - balance);
  // }
  function Bank(e, a) {
    e.preventDefault();
    if (a === true) {
      setAmount(amount + balance);
    } else if (a === false) {
      setAmount(amount - balance);
    }
  }
  return (
    <div className="App">
      <h1>ATM</h1>
      <select>
        <option id=""></option>
        <option id="withdraw">Withdraw</option>
        <option id="deposit">Deposit</option>
      </select>{" "}
      <br />
      <br />
      <label>Enter The Amount :</label>
      <input
        type="number"
        value={balance}
        onChange={(e) => setBalance(Number(e.target.value))}
      ></input>
      <button onClick={(e) => Bank(e, true)}>Deposit</button>
      <button onClick={(e) => Bank(e, false)}>Withdraw</button>
      <h2>{message}</h2>
    </div>
  );
}
