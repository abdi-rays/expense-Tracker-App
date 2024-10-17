import React, { useRef, useState } from "react";
const EditTransactionForm = ({
  transactions,
  setTransactions,
  isEditing,
  setIsEditing,
  id,
}) => {
  const [editedName, setEditedName] = useState("");
  const [editedAmount, setEditedAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(editedName, editedAmount, id);
    setEditedName("");
    setEditedAmount("");
  };
  // EDIT TODO
  const editTodo = (Name, Amount, ID) => {
    const value = Number(Amount);
    const newTodo = transactions.map((item) =>
      item.id === ID ? { ...item, name: Name, amount: value } : item
    );
    setTransactions(newTodo);
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <h3>Update Transaction</h3>
      <form id="form" onSubmit={handleSubmit}>
        <div className="from_control">
          <label htmlFor="text">Name:</label>
          <input
            type="text"
            id="text"
            autoFocus
            placeholder="Enter Name Of Transaction..."
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
        </div>
        <div className="from_control">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            placeholder="Enter Amount..."
            value={editedAmount}
            onChange={(e) => setEditedAmount(e.target.value)}
          />
        </div>
        <button className="btn">Save Transaction</button>
      </form>
    </div>
  );
};

export default EditTransactionForm;
