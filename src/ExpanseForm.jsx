import { useState } from 'react';

function ExpanseForm({ addExpense }) {

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [nextId, setNextId] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        addExpense({ id: nextId, description, amount: parseFloat(amount) });
        setNextId(nextId+1);
        setDescription('');
        setAmount(0);
    }

    return (
        <form className="expense-form" onSubmit={handleSubmit}>
            <label className="field">
                Opis
                <input
                    type="text"
                    placeholder="np. Zakupy spożywcze"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </label>
            <label className="field">
                Kwota (zł)
                <input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0,00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </label>
            <button type="submit">Dodaj wydatek</button>
        </form>
    );
}

export default ExpanseForm;