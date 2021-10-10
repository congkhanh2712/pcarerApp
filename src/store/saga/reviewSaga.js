import { call, put } from 'redux-saga/effects';
import { reviewApi } from '../../api';
import {
    getReviewsSuccess,
    getReviewsFail,
} from '../actions/reviewAction';

export function* getReviewsRequestSaga(action) {
    try {
        console.log('>>>>>>>getReviewsAdmin');
        const res = yield call(reviewApi.getCarerReview, action.payload)
        if (res != null) {
            yield put(getReviewsSuccess(res))
            console.log('>>>>>>>>getReviewsSuccess', res);
        } else {
            yield put(getReviewsFail('Get Failed'))
            console.log('>>>>>>>getReviewsFail: ');
        }
    } catch (err) {
        console.log('khanh-saga', 'getReviewsError', err);
    }
}