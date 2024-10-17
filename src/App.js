import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import Header from "./components/Header";
import Summary from "./components/Summary";
import History from "./components/History";
import AddTransaction from "./components/AddTransaction";
import EditTransactionForm from "./components/EditTransactionForm";

function App() {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("Rtransaction")) || []
  );
  const [isEditing , setIsEditing] = useState(false);
  const [id , setID ] = useState(null);
  const [isDark , setIsDark] = useState(true)
  const [theme , setTheme] =useLocalStorage('theme' ? 'dark' : 'light');
  useEffect(() => {
    localStorage.setItem("Rtransaction", JSON.stringify(transactions));
  }, [transactions]);
   // TOGGLE THEME
   const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light' ;
    setTheme(newTheme);
   }
  // DELETE TRANSACTION
  const deleteTransaction = (ID) => {
    const newTransaction = transactions.filter(
      (transaction) => transaction.id !== ID
    );
    setTransactions(newTransaction);
  };
   

  return (
    <div className="App" data-theme={theme}>
      <Header />
      <div className="container">
        <Summary transactions={transactions}
                 isDark={isDark}
                 setIsDark={setIsDark}
                 switchTheme={switchTheme}
        />
        <History
          transactions={transactions}
          setTransactions={setTransactions}
          deleteTransaction={deleteTransaction}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          id={id}
          setID={setID}
        />
        {
          isEditing ? (
         <EditTransactionForm 
           transactions={transactions}
           setTransactions={setTransactions}
           isEditing={isEditing}
          setIsEditing={setIsEditing}
           id={id}
           />
          ):(

            <AddTransaction
               transactions = {transactions}
               setTransactions={setTransactions}
            />
          )
        }
      </div>
    </div>
  );
}

export default App;
