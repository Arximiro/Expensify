import moment from 'moment';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../../actions/filters';

// -- Jest Notes --
// NA

test('Should set text filter', () => {
    const action = setTextFilter('rent');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'rent'
    });
});

test('Should set text filter default if no value provided', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('Should set sort by amount', () => {
    expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'});
});

test('Should set sort by date', () => {
    expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'});
});

test('Should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});
