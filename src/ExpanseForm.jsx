import { useState } from 'react';

function ExpanseForm({ expenses, setExpenses }) {

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [nextId, setNextId] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        setExpenses([...expenses, { id: nextId, description, amount: parseFloat(amount) }]);
        setNextId(nextId+1);
        setDescription('');
        setAmount(0);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <input
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            />
            <button type="submit">Add Expense</button>
        </form>
    );
}

export default ExpanseForm;