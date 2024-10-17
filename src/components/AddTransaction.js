import React, { useRef, useState } from 'react'

const AddTransaction = ({transactions , setTransactions}) => {
  const [name , setName ] = useState('');
  const [amount , setAmount] = useState(0);

    // ADD TRANSACTION TO THE PAGE
    const addTransaction = (e) => {
      e.preventDefault();
      //
      addItem(name, amount);
      //
      setName("");
      setAmount("");
    };
  
    // ADD ITEM
    const addItem = (Name, Amount) => {
      const value = Number(Amount);
      const newItem = { id: generatedId(), name: Name, amount: value };
      const newTransaction = [...transactions, newItem];
      setTransactions(newTransaction);
    };

    
    // GENERATE ID
    const generatedId = () => {
      return Math.floor(Math.random() * 100000);
    };
  return (
   <div>
       <h3>Add New Transaction</h3>
      <form id="form"  onSubmit={addTransaction}>
        <div className="from_control">
          <label htmlFor="text">Name:</label>
          <input
            type="text"
            id="text"
            autoFocus
            placeholder="Enter Name Of Transaction..."
            value={name}
            onChange={(e)=> setName(e.target.value)}
          />
        </div>
        <div className="from_control">
          <label htmlFor="amount">Amount:</label>
           <input
               type="number" 
               id="amount" 
               placeholder="Enter Amount..." 
               value={amount}
               onChange={(e) => setAmount(e.target.value)}
           />
              
        </div>
        <button className="btn" 
        
       >Add Transaction</button>
      </form>
   </div>
  )
}

export default AddTransaction;