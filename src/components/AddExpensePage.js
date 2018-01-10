import React from 'react';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';


export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm onSubmit={this.onSubmit} />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);


// AddExpensePage is rendered by AppRouter which is rendered by App.js when the correct link is visted. Then, AddExpensePage renders ExpenseForm
// passing down via props the onSubmit function. Therefore, when the onSubmit event handler of the form in ExpenseForm is triggered, it runs this function.

// Connect is used to give access to dispatch. Dispatch is then used to dispatch the AddExpense action generator which adds the expense to the expenses array.

// Any component rendered by React-Router gets access to a lot of props, one of which is history, which has a bunch of methods.
// History has a function called push, which will redirect the user to whatever url is provided. This is used to redirect to the dashboard after adding an expense.

// mapDispatchToProps is used to make the component more testable, abstracting away the dispatch call.
// onSubmit is passed in via the props and it contains the dispatch call.
