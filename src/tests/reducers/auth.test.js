import authReducer from '../../reducers/auth';

// --- Jest Notes ---
// NA

test('Should set default state', () => {
    const actionObject = { type: '@@INIT' };
    const state = authReducer(undefined, actionObject);
    expect(state).toEqual({});
});

test('Should set uid for login', () => {
    const uid = 132;
    const actionObject = { type: 'LOGIN', uid };
    const state = authReducer(undefined, actionObject);

    expect(state.uid).toBe(uid);
});

test('Should clear uid for logout', () => {
    const uid = 132;
    const actionObject = { type: 'LOGIN' };
    const state = authReducer(uid, actionObject);

    expect(state).toEqual({});
});
