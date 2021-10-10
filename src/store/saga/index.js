import { all, takeLatest } from 'redux-saga/effects'
//import Action
import { actionTypes as authenActionTypes } from '../actions/authAction';
import { actionTypes as petActionTypes } from '../actions/petAction';
import { actionTypes as carerActionTypes } from '../actions/carerAction';
import { actionTypes as reviewActionTypes } from '../actions/reviewAction';

//import Saga
import {
    loginRequestSaga,
} from '../saga/authSaga';
import {
    getPetsRequestSaga,
} from './petSaga';
import { getCarersRequestSaga } from './carerSaga';
import { getReviewsRequestSaga } from './reviewSaga';

function* rootSaga() {
    yield all([
        //authentication
        takeLatest(authenActionTypes.LOGIN_REQUEST, loginRequestSaga),
        takeLatest(petActionTypes.GET_PETS_REQUEST, getPetsRequestSaga),
        takeLatest(carerActionTypes.GET_CARERS_REQUEST, getCarersRequestSaga),
        takeLatest(reviewActionTypes.GET_REVIEWS_REQUEST, getReviewsRequestSaga),
    ])
}
export default rootSaga