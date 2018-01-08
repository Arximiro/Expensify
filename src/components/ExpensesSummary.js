import React from 'react';
import numeral from 'numeral';
import {connect} from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectVisibleExpenses from '../selectors/expenses';

export const ExpensesSummary = ({expenseCount, expenseTotal}) => {
    if (expenseCount === 0) {        
        return (
            <p></p>
        );
    } else {        
        const expenseText = expenseCount > 1 ? 'expenses' : 'expense';
        const formattedTotal = numeral(expenseTotal / 100).format('$0,0.00');
        return (
        <p>Viewing {expenseCount} {expenseText} totalling {formattedTotal}</p>
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
