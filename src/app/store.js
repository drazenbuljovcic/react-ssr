import { applyMiddleware, compose, createStore} from 'redux';
import logger from 'redux-logger';

import reducer from './reducers/reducer';

let reduxCreateStore = compose(
    applyMiddleware(logger())
)(createStore);

export default function configStore(initialState = {}) {
    return reduxCreateStore(reducer, initialState);
}