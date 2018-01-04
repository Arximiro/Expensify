import React from 'react';
import numeral from 'numeral';
import {connect} from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectVisibleExpenses from '../selectors/expenses';

export const ExpensesSummary = ({expenses, filters}) => {
    if (expenses.length > 0) {
        const visibleExpenes = selectVisibleExpenses(expenses, filters);
        const count = visibleExpenes.length;
        const total = selectExpensesTotal(visibleExpenes);
        const formattedTotal = numeral(total / 100).format('$0,0.00');
        const expenseText = count > 1 ? 'expenses' : 'expense';
        return (
        <p>Viewing {count} {expenseText} totalling {formattedTotal}</p>
        );
    } else {
        return (
            <p></p>
        );        
    }    
};

const mapStateToProps = (state) => ({expenses: state.expenses, filters: state.filters});

export default connect(mapStateToProps)(ExpensesSummary);
