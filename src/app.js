import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { firebase } from './firebase/firebase';
import { login, logout, startLogout } from './actions/auth';
import { startSetExpenses } from './actions/expenses';
import AppRouter, { history } from './routers/AppRouter';
import LoadingPage from './components/LoadingPage';
import store from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, app);
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />, app);

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});


// --- Notes ---
// The Provider component wraps the entire application and passes the store down to all children.
// renderApp() keeps track of if the app has been rendered yet, so it is not re-rendered every time a user logs in or out.
// In the Firebase if statement, if a user is authenticated, the expenses are dispatched, then renderApp() runs checking if the app has already been rendered.
// If the user is on the login page, they are redirected to the dashboard page, which will have all the expenses for that user.
// Else handles the logout. When logout is clicked, user is no longer true, and the app redirects to the login page.
