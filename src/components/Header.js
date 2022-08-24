import React, { useState } from "react";

const Header = (props) => {
  const expense = (props.expense * -1).toFixed(2);
  const income = (props.income * 1).toFixed(2);

  const balanceAmount = props.balance
    .reduce((total, value) => total + value, 0)
    .toFixed(2);

  return (
    <div className="header-container">
      <h1>Expense Tracker</h1>

      <div className="balance">
        <h2>Your Balance</h2>
        <p className="balance-amount">${balanceAmount}</p>
      </div>

      <div className="income-expense">
        <div className="income">
          <p>income</p>
          <p className="income-amount">${income}</p>
        </div>

        <div className="expense">
          <p>Expense</p>
          <p className="expense-amount">${expense}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
