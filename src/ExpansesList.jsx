function ExpansesList({ expenses }) {
const currency = new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' });

return (
    <div className="expanses-list">
        {expenses.map((expanse) => 
        <div key={expanse.id} className="expanse-item">
            <span>{expanse.description}</span>
            <span>{currency.format(expanse.amount)}</span>
        </div>
        )}
    </div>
);
}

export default ExpansesList;