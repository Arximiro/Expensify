import moment from 'moment';
import filtersReducer from '../../reducers/filters';

// -- Jest Notes --
// filtersReducer takes two arguments, first is the current state of filters, second is the action object.
// If no state is passed in, it will use the default state for filters.

test('Should set default filter values', () => {
    const actionObject = {type: '@@INIT'};
    const state = filtersReducer(undefined, actionObject);
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set text filter value', () => {
    const text = 'car';
    const actionObject = {type: 'SET_TEXT_FILTER', text: 'car'};
    const state = filtersReducer(undefined, actionObject);
    expect(state.text).toBe(text);
});

test('Should set sortBy to amount', () => {
    const actionObject = {type: 'SORT_BY_AMOUNT'};
    const state = filtersReducer(undefined, actionObject );
    expect(state.sortBy).toBe('amount');
});

test('Should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const actionObject = {type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, actionObject);
    expect(state.sortBy).toBe('date');
});

test('Should set startDate', () => {
    const startDate = moment();
    const actionObject = {type: 'SET_START_DATE', startDate};
    const state = filtersReducer(undefined, actionObject);
    expect(state.startDate).toEqual(startDate);
});

test('Should set endDate', () => {
    const endDate = moment();
    const actionObject = {type: 'SET_END_DATE', endDate};
    const state = filtersReducer(undefined, actionObject);
    expect(state.endDate).toEqual(endDate);
});
