import React from "react";
import Transactions from "./Transactions";
const History = ({
  transactions,
  setTransactions,
  deleteTransaction,
  isEditing,
  setIsEditing,
  id,
  setID
}) => {
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((item) => (
          <Transactions
            key={item.id}
            item={item}
            deleteTransaction={() => deleteTransaction(item.id)}
            setIsEditing={setIsEditing}
            isEditing={isEditing}
            id={id}
            setID={setID}
          />
        ))}
      </ul>
    </div>
  );
};

export default History;
