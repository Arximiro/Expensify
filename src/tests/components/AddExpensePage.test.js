import React from 'react';
import {shallow} from 'enzyme';
import {AddExpensePage} from '../../components/AddExpensePage';
import expenses from '../fixtures/testExpenses';

// --- Jest Notes ---
// The Jest method beforeEach() will do something before each test. In this file it is assigning fresh variables.
// Since history is called in AddExpensePage as history.push(), when the spy is created it must be able to be called in the same manner.


let startAddExpense, history, wrapper;

beforeEach(() => {    
    startAddExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />)    
});

test('Should render AddExpensePage', () => {        
    expect(wrapper).toMatchSnapshot();
});

test('Should handle onSubmit', () => {
    const expense = expenses[2];
    wrapper.find('ExpenseForm').prop('onSubmit')(expense);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expense);    
});
