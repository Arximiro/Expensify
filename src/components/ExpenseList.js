import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenes from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No expenses to display</span>
                    </div>
                ) : (
                        props.expenses.map((expense) => {
                            return <ExpenseListItem key={expense.id} {...expense} />
                        })
                    )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenes(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);

// Connect is a higher order component (HOC). It uses connect to connect us to the store via mapStateToProps. MSTP takes in the state and returns what we need
// from the state, in this component that is the expenses and filters. We pass pass those through the expenses selector to determine what should be visible.
// Connect then passes or *maps* the returned state to the props of ExpenseList, giving us access to the returned expenses.
// It's a component rendering a component, and in doing so passing the state of our store to that component in the form of props.
