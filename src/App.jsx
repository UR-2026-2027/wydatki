import './App.css'
import TotalAmountBar from './TotalAmountBar';
import ExpanseForm from './ExpanseForm';
import ExpansesList from './ExpansesList';
import { useState } from 'react';

function App() {

  const [expenses, setExpenses] = useState([{id: 0, description: "cos", amount: 100.00}]);

  return (
    <>
      <TotalAmountBar expenses={expenses}/>
      <ExpanseForm expenses={expenses} setExpenses={setExpenses}/>
      <ExpansesList expenses={expenses}/>
    </> 
  )

}

export default App;
