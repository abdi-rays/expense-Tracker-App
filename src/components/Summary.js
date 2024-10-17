import React, { useEffect, useState } from "react";

const Summary = ({ transactions , isDark , setIsDark, switchTheme}) => {
  const [balance, setbalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const summary = () => {
    const amounts = transactions.map((transaction) => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const Income = amounts
      .filter((item) => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
    const Expense = (
      amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    ).toFixed(2);

    setbalance(total);
    setIncome(Income);
    setExpense(Expense);
  }
  
  useEffect(
    summary
  , [transactions]);
  
  return (
    <div className="summary">
      <div className="mode-container">
      <h4 className="balanceTitle">Your Balance</h4>
      <button id="dark__mode__btn" 
               onClick={() => {
                setIsDark(!isDark)
                switchTheme();
               }
              } 
              className={!isDark ? 'on' : null}
        >
            <span></span>
          </button>

      </div>
      <h1 className="balance">${balance}</h1>
      <div className="income_expence_container">
        <div>
          <h4>income</h4>
          <p className="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${expense}</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
