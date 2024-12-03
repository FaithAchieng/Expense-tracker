import Header from './Components/Header.js';
import Balance from './Components/Balance.js';
import TransactionList from './Components/TransactionList.js';
import './App.css';
import AddTransaction from './Components/AddTransaction.js';


function App() {
  return (
    <div className="body">
      <Header />
      <div className="container">
        <Balance />
        <TransactionList />
        <AddTransaction />
      </div>
        
    </div>
  );
}

export default App;
