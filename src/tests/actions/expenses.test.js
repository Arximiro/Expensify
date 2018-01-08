import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';
import {addExpense, editExpense, removeExpense, startAddExpense, setExpenses, startSetExpenses} from '../../actions/expenses';
import expenses from '../fixtures/testExpenses';

// -- Jest Notes --
// Jest method toEqual() is used to compare the properties of two objects.
// Jest method expect.any() is used for return values that are not static.

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expensesData[id] = {description, note, amount, createdAt};
    });
    database.ref('expenses').set(expensesData).then(() => done());
});

test('Should setup add expense action object with provided values', () => {
    const expense = expenses[0];
    const action = addExpense(expense);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense
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

test('Should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('Should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expense = {
        description: 'Chair',
        note: '',
        amount: 38000,
        createdAt: 12000
    };

    store.dispatch(startAddExpense(expense)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expense
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expense);
        done();
        });
});

test('Should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0 
    };

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
        });
});

test('Should fetch expenses from Firebase', (done) => {
    const store = createMockStore({}); 

    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });      
    });
    done()
});
