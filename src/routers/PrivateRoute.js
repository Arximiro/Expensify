import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <div>
                    <Header />
                    <Component {...props} />
                </div>
            ) : (
                    <Redirect to="/" />
                )
        )} />
    );

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);

// --- Notes ---
// In PrivateRoute props is destructured pulling off isAuthenticated and component (renaming it to Component) by name.
// ...rest is used to spread out the rest of the props. This could be named anything such as ...props or ...restOfThem.
// Doing it this way prevents isAuthenticated from being blindly passed down into Route.
// Since PrivateRoute renders Route, when a component is accessed it determines if the user is Authenticated before displaying it.
// If the user is authenticated, then the component is rendered. Otherwise they get redirected to the home page if they visit
// a page in which they do not have access to. The props passed into component come from React-Router and contain history, match, etc.
