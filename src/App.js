import React, { useState } from "react";
import Header from "./components/Header";
import History from "./components/History";
import AddForm from "./components/AddForm";

const App = () => {
  const [item, setItem] = useState([
    { id: 1, title: "Cash", amount: 500 },
    { id: 2, title: "Book", amount: -40 },
  ]);
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
  const [balance, setBalance] = useState([]);

  const calcAmount = (data) => {
    setBalance(data);

    const incomeAmount = data
      .filter((e) => e > 0)
      .reduce((total, value) => total + value, 0);

    const expenseAmount = data
      .filter((e) => e < 0)
      .reduce((total, value) => total + value, 0);

    setIncome(incomeAmount);
    setExpense(expenseAmount);
  };

  const addItem = (data) => {
    const randomNum = Math.floor(Math.random() * 10000 + 1);
    const newItem = { id: randomNum, ...data };
    setItem([...item, newItem]);
  };

  const deleteItem = (id) => {
    const newArr = item.filter((e) => e.id !== id);
    setItem(newArr);
  };

  return (
    <div className="container">
      <Header income={income} expense={expense} balance={balance} />
      <History item={item} delete={deleteItem} calc={calcAmount} />
      <AddForm add={addItem} />
    </div>
  );
};

export default App;
