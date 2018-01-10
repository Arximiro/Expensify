import { createStore } from 'redux';

// Action generators - functions that return actions objects.
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({ type: 'RESET' });




// Reducer
// 1. Redcucers are pure functions (output is ONLY determined by the input)
// 2. Never change state or action
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy };
        case 'DECREMENT':
            return { count: state.count - action.decrementBy };
        case 'SET':
            return { count: action.count };
        case 'RESET': return { count: 0 };
        default: return state;
    }
    return state;
};

const store = createStore(countReducer);



// Subscribes to any changes to the store and does the console log.
// The return value if store.subscribe is a function that will unsubscribe you. So you can store it as anything and call it like anything(); to unsub.
store.subscribe(() => {
    console.log(store.getState());
});




// Dispatch Calls
store.dispatch(incrementCount({ incrementBy: 12 }))

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 1021 }));
