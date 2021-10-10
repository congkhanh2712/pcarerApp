import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
//reducers
import authReducers from './reducers/authReducers';
import petReducers from './reducers/petReducers';
import carerReducers from './reducers/carerReducers';
import reviewReducers from './reducers/reviewReducers';


const sagaMiddleware = createSagaMiddleware()
const allReducers = combineReducers({
    authReducers,
    petReducers, 
    carerReducers,
    reviewReducers,
})
const store = createStore(
    allReducers,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga)
export default store;