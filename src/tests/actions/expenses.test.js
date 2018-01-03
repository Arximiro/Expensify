import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

// -- Jest Notes --
// Jest method toEqual() is used to compare the properties of two objects.
// Jest method expect.any() is used for return values that are not static.

test('Should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        note: 'December Rent',
        amount: 69000,
        createdAt: 1000
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    });
});

test('Should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});

test('Should setup remove expense action object', () => {
    const action = removeExpense('12');
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '12'
    });
});

test('Should setup edit expense action object', () => {
    const action = editExpense('10', {description: 'Car Payment'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '10',
        updates: {
            description: 'Car Payment'
        }
    });
});
