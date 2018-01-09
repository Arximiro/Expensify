import React from 'react';
import {shallow} from 'enzyme';
import {SingleDatePicker} from 'react-dates';
import moment from 'moment';
import expenses from '../fixtures/testExpenses';
import ExpenseForm from '../../components/ExpenseForm';

// --- Jest Notes ---
// Jest.fn() is a function that returns a new spy function which is a mock function we can use to test our functions.

// --- Enzyme Notes ---
// Enzyme method find() will find an html element in the wrapper and select it.
// Enzyme method simulate() gives the ability to trigger an event on the element. Change, submit, click, etc..
// Enzyme method at() will find the 1st, 2nd, 3rd, etc appearance of an element in the wrapper and select it.
// Enzyme method prop() allows access a prop on a selected element. If that prop is a function you can then pass data to that function using another set of ().

test('Should render ExpenseForm', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseForm with expense', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render error for invalid form submission', () => {
    const pDefault = {preventDefault: () => {}};
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', pDefault);
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot();
});

test('Should set description on input change', () => {
    const value = 'Test Description';
    const targetObject = {target: {value}};
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', targetObject);
    expect(wrapper.state('description')).toBe(value);
});

test('Should set note on textarea change', () => {
    const value = 'Test Note';
    const targetObject = {target: {value}};
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', targetObject);
    expect(wrapper.state('note')).toBe(value);
});

test('Should set amount if valid input', () => {
    const value = '23.50';
    const targetObject = {target: {value}};
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', targetObject);
    expect(wrapper.state('amount')).toBe(value);
});

test('Should not set amount if invalid input', () => {
    const value = '12.122';
    const targetObject = {target: {value}};
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', targetObject);
    expect(wrapper.state('amount')).toBe('');
});

test('Should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const pDefault = {preventDefault: () => {}};
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', pDefault);
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[1].description,
        amount: expenses[1].amount,
        note: expenses[1].note,
        createdAt: expenses[1].createdAt
    });
});

test('Should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('Should set calendarFocused', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toBe(focused);
});
