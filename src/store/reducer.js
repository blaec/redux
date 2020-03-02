const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    let result = state;
    switch (action.type) {
        case 'INCREMENT':
            result = {counter: state.counter + 1};
            break;
        case 'DECREMENT':
            result = {counter: state.counter - 1};
            break;
        case 'ADD':
            result = {counter: state.counter + 5};
            break;
        case 'SUBSTRACT':
            result = {counter: state.counter + 5};
            break;
    }
    return result;
};

export default reducer;