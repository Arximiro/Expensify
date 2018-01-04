import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/testExpenses';

// --- Jest Notes ---
//

test('Should return 0 is no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('Should correctly add up a single expense', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(50000);
});

test('Should correctly add up multiple expenses', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(104300);
});
