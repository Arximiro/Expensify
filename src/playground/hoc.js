import React from 'react';
import ReactDOM from 'react-dom';

// Higher Order Component (HOC)
// A component that renders another component

// Benefits: Reuse Code, Render Hijacking, Prop Manipulation, Abstract State

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, please don't share!</p>}
            {props.isAdmin && <WrappedComponent {...props} />}
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated && <p>User Authenticated - This is private information!</p>}
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please Login To View Information</p>}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


//ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo eh="eeehhh" isAuthenticated={true} info="These are the details" />, document.getElementById('app'));

console.log('hoc.js running!');
