import React from 'react';
import moment from 'moment';
import {shallow} from 'enzyme';
import {DateRangePicker} from 'react-dates';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/testFilters';

// --- Jest Notes ---
//

// --- Enzyme Notes ---
// The Enzyme method setProps() gives the ability set the value of a wrapper's props, or in this case override the defaults set below.

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('Should render ExpenseListFilters', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilters with alt data', () => {
    wrapper.setProps({filters: altFilters});
    expect(wrapper).toMatchSnapshot();
});

test('Should set date range', () => {
    const value = {
        startDate: moment().subtract(5, 'days'),
        endDate: moment().add(3, 'days')
    }
    wrapper.find(DateRangePicker).prop('onDatesChange')(value);
    expect(setStartDate).toHaveBeenLastCalledWith(value.startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(value.endDate)
});

test('Should set calendarFocused', () => {
    const calendarFocused = 'endDate'    
    wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
});

test('Should handle text change', () => {
    const value = 'Test Text';
    const targetObject = {target: {value}};
    wrapper.find('input').simulate('change', targetObject);
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
});

test('Should sort by date', () => {
    wrapper.setProps({filters: altFilters});
    const value = 'date';
    const targetObject = {target: {value}};
    wrapper.find('select').simulate('change', targetObject )
    expect(sortByDate).toHaveBeenCalled();
});

test('Should sort by amount', () => {
    const value = 'amount';
    const targetObject = {target: {value}};
    wrapper.find('select').simulate('change', targetObject )
    expect(sortByAmount).toHaveBeenCalled();
});
