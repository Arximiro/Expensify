import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/testExpenses';
import {filters} from '../fixtures/testFilters';

// --- Jest Notes ---
//

test('Should render ExpensesSummary with one expense', () => {
    const props = {
        expenses: [expenses[0]],
        filters
    };
    const res = ExpensesSummary(props);
    expect(res).toMatchSnapshot();
});

test('Should render ExpensesSummary with expenses', () => {
    const props = {
        expenses,
        filters
    };
    const res = ExpensesSummary(props);
    expect(res).toMatchSnapshot();
});
