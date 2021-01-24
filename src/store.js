import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/index';


//use thunk as middleware
const middleware = [thunk];
// first run of the project, there are no state{therefore empty object}
const initialState = {};

//create the store(for that use "createStore" function)
// we can create store into the /src/index.js file also
const store = createStore(
    //parameters
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        // to access browser extention (ruduxDevTools)
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
export default store;