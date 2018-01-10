import moment from 'moment';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';
import expenses from '../fixtures/testExpenses';
import expensesReducer from '../../reducers/expenses';

// --- Jest Notes ---
// NA

test('Should set default state', () => {
    const actionObject = { type: '@@INIT' };
    const state = expensesReducer(undefined, actionObject);
    expect(state).toEqual([]);
});

test('Should add expense to expenses array', () => {
    const expense = {
        id: 4,
        description: 'Lunch',
        note: 'Arbys',
        amount: 80200,
        createdAt: moment()
    };
    const actionObject = { type: 'ADD_EXPENSE', expense };
    const state = expensesReducer(expenses, actionObject);
    expect(state).toEqual([...expenses, expense]);
});

test('Should remove expense from expenses array using id', () => {
    const id = expenses[1].id;
    const actionObject = { type: 'REMOVE_EXPENSE', id };
    const state = expensesReducer(expenses, actionObject);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expense from expenses array due to invalid id', () => {
    const id = '4';
    const actionObject = { type: 'REMOVE_EXPENSE', id };
    const state = expensesReducer(expenses, actionObject);
    expect(state).toEqual(expenses);
});

test('Should edit expense in expesnes array using id and updates', () => {
    const id = expenses[2].id;
    const updates = { amount: 10000 };
    const actionObject = { type: 'EDIT_EXPENSE', id, updates };
    const state = expensesReducer(expenses, actionObject);
    expect(state[2].amount).toBe(10000);
});

test('Should not edit expense in expesnes array using invalid id', () => {
    const id = '4';
    const updates = { amount: 2000 };
    const actionObject = { type: 'EDIT_EXPENSE', id, updates };
    const state = expensesReducer(expenses, actionObject);
    expect(state).toEqual(expenses);
});

test('Should set expenses', () => {
    const actionObject = { type: 'SET_EXPENSES', expenses: [expenses[2]] }
    const state = expensesReducer(expenses, actionObject)
    expect(state).toEqual([expenses[2]]);
});
