import React from 'react';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectVisibleExpenses from '../selectors/expenses';

export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
    const expenseText = expenseCount > 1 ? 'expenses' : 'expense';
    const formattedTotal = numeral(expenseTotal / 100).format('$0,0.00');

    if (expenseCount > 0) {
        return (
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseText} totalling <span>{formattedTotal}</span></h1>
                    <div className="page-header__actions">
                        <Link className="button" to="/create">Add Expense</Link>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">No expenses found</h1>
                    <div className="page-header__actions">
                        <Link className="button" to="/create">Add Expense</Link>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    const visibleExpenes = selectVisibleExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenes.length,
        expenseTotal: selectExpensesTotal(visibleExpenes)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
