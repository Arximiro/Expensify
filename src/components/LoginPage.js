import React from 'react';
import { connect } from 'react-redux';
import { startLogin, startLoginGit, startLoginAnon } from '../actions/auth';

export const LoginPage = ({ startLogin, startLoginGit, startLoginAnon }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control.</p>
            <button
                id="login1"
                className="button"
                onClick={startLogin}
            >
                Login with Google
            </button>
            <button
                id="login2"
                className="button"
                onClick={startLoginGit}
            >
                Login with Git
            </button>
            <button
                id="login3"
                className="button"
                onClick={startLoginAnon}
            >
                Login as Guest
            </button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startLoginGit: () => dispatch(startLoginGit()),
    startLoginAnon: () => dispatch(startLoginAnon())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
