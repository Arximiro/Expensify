
const getExpensesTotal = (expenses) => {        
    const amounts = expenses.map((expense) => expense.amount);        
    const total = amounts.reduce((a, b) => a + b, 0)
    return total;
};

export default getExpensesTotal;
