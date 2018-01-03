import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calendarFocused) => this.setState(() => ({calendarFocused}));
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };
    onSortChange = (e) => {
        e.target.value === 'amount' ?
        this.props.sortByAmount() :
        this.props.sortByDate();
    };
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                />
                <select 
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    startDateId={"start"}
                    endDateId={"end"}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

const mapStateToProps = (state) => ({filters: state.filters});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);


// The connect commponent connects our ExpenseListFilters component to the store, passing in the filters to our component via mapStateToProps.
// In our ExpenseListFilters component we also get dispatch passed in thanks to connect.
// Whatever text is in the input field is what it will sort the expenses by, it pulls this value from the store reactively.
// We use the onChange event handler, passing in a function. When we change the input field, we dispatch the setTextFilter action.
// We pass in whatever the target value is from the onChange event, thus filtering the expenses by that text.
