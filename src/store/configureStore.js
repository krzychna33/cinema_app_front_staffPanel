import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import showingsReducer from '../reducers/showingsReducer';
import moviesReducer from '../reducers/moviesReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            showings: showingsReducer,
            movies: moviesReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
}