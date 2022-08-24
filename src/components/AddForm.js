import React, { useState } from "react";

const AddForm = (props) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const sendInfo = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please enter an item!");
      return;
    } else if (!amount) {
      alert("Please speify the amount!");
      return;
    }

    setText("");
    setAmount(0);

    props.add({ title: text, amount: amount });
  };

  return (
    <div className="add-form">
      <h2>Add new transaction</h2>

      <form onSubmit={sendInfo}>
        <div>
          <label htmlFor="text">Text</label>
          <br />
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="amount">
            Amount <br /> (Income: positive , Expense: negetive)
          </label>
          <br />
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button className="btn-1" type="submit">
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default AddForm;
