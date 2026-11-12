import './App.css'
import TotalAmountBar from './TotalAmountBar';
import ExpanseForm from './ExpanseForm';
import ExpansesList from './ExpansesList';
import { useState, useEffect } from 'react';
import { getExpenses, addExpense } from './api';

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    async function fetchExpenses() {
      try {
        const expenses = await getExpenses();
        setExpenses(expenses);
      } catch (error) {
        console.error('Błąd podczas pobierania wydatków:', error);
      }
    }
    fetchExpenses();
  }, []);

  async function handelAddExpense(expense) {
    const added = await addExpense(expense);
    setExpenses([...expenses, added]);
  }

  return (
    <div className="app-shell">
      <header className="page-header">
        <div className="brand-mark" aria-hidden="true">↗</div>
        <div>
          <p className="eyebrow">Twój budżet pod kontrolą</p>
          <h1>Moje wydatki</h1>
          <p className="page-description">Prosty sposób, by wiedzieć, na co wydajesz.</p>
        </div>
      </header>

      <main className="dashboard">
        <TotalAmountBar expenses={expenses} />

        <section className="panel" aria-labelledby="add-expense-heading">
          <div className="section-heading">
            <h2 id="add-expense-heading">Dodaj wydatek</h2>
            <span className="section-note">Uzupełnij opis i kwotę</span>
          </div>
          <ExpanseForm addExpense={handelAddExpense} />
        </section>

        <section className="panel" aria-labelledby="expenses-heading">
          <div className="section-heading">
            <h2 id="expenses-heading">Historia wydatków</h2>
            <span className="section-note">{expenses.length} pozycji</span>
          </div>
          <ExpansesList expenses={expenses} />
        </section>
      </main>
    </div>
  )

}

export default App;
