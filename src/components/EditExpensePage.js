import React from 'react';
import {connect} from 'react-redux';
import { editExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.startRemoveExpense(this.props.expense.id);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

const mapStateToProps = (state, props) => ({
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

// We use mapStateToProps to get access to the current state of the expenses array, access provided by the (HOC) connect.
// React-Router renders the (HOC) thus providing acces to a bunch of other props, such as match.
// We use match to match the id of an expense in the expenses array to the id in the browser url, then return that expense.
// Then we pass the return value of mapStateToProps into EditExpensePage, allowing it to populate the expenseForm with
// the expense which we are wanting to edit.