export async function getExpenses() {
    const response = await fetch('/api/expenses');

    if(!response.ok) {
        throw new Error('Cos nie pyklo !!');
    }

    return await response.json();
}

export async function addExpense(expense) {
    const response = await fetch('/api/expenses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(expense),
    });

    if(!response.ok) {
        throw new Error('Nie udało się dodać wydatku');
    }

    return await response.json();
}