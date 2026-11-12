const response = await fetch('http://localhost:8080/api/expenses');

console.log(await response.json());

const response2 = await fetch('http://localhost:8080/api/expenses', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        description: 'Test Expense',
        amount: 100,
    }),
});

console.log(await response2.json());

const response3 = await fetch('http://localhost:8080/api/expenses');

console.log(await response3.json());

async function fetchExpenses() {
    await fetch('http://localhost:8080/api/expenses');
}