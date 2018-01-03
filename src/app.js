import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import store from './store/configureStore';
import {addExpense, editExpense, removeExpense} from './actions/expenses';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


store.dispatch(addExpense({description: 'Water Bill', note: 'January Water Bill', amount: 3500, createdAt: 12000}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 7500, createdAt: 13000}));
store.dispatch(addExpense({description: 'Rent Bill', amount: 109500, createdAt: 2000}));


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, app);
