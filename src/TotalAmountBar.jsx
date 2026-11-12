function TotalAmountBar({ expenses }) {
    const totalAmount = expenses
    .reduce((sum, expense) => sum + expense.amount, 0);

    return (
        <div className="total-amount-bar">
            <span className="total-label">Łączna kwota wydatków</span>
            <h2>{new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' }).format(totalAmount)}</h2>
        </div>
    );
}

export default TotalAmountBar;