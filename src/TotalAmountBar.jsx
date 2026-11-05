function TotalAmountBar({ expenses }) {
    const totalAmount = expenses
    .reduce((sum, expense) => sum + expense.amount, 0);

    return (
        <div className="total-amount-bar">
            <h2>Total Amount: {totalAmount}</h2>
        </div>
    );
}

export default TotalAmountBar;