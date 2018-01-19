import { firebase, googleAuthProvider, gitAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithRedirect(googleAuthProvider);
    };
};

export const startLoginGit = () => {
    return () => {
        return firebase.auth().signInWithRedirect(gitAuthProvider);
    };
};

export const startLoginAnon = () => {
    return () => {
        return firebase.auth().signInAnonymously();
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};
