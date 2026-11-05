function ExpansesList({ expenses }) {
return (
    <div className="expanses-list">
        {expenses.map((expanse) => 
        <div key={expanse.id} className="expanse-item">
            <span>{expanse.description}</span>
            <span>{parseFloat(expanse.amount).toFixed(2)}</span>
        </div>
        )}
    </div>
);
}

export default ExpansesList;