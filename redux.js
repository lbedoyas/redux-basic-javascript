const { createStore } = require('redux');
const initialState = {
    edad: 18
}
const myReducer = (state = initialState, action) => {
    const nuevoEstado = {...state };

    if (action.type === 'Add') {
        nuevoEstado.edad += action.val;
    }
    if (action.type === 'substract') {
        nuevoEstado.edad -= action.val;
    }
    return nuevoEstado;
}

const store = createStore(myReducer);
store.subscribe(() => {
    console.log('State Changed ' + JSON.stringify(store.getState()));
});
store.dispatch({ type: 'Add', val: 10 });
store.dispatch({ type: 'substract', val: 1 });