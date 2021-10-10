import { call, put } from 'redux-saga/effects';
import { carerApi } from '../../api';
import {
    getCarersSuccess,
    getCarersFail,
} from '../actions/carerAction';

export function* getCarersRequestSaga() {
    try {
        console.log('>>>>>>>getCarersAdmin');
        const res = yield call(carerApi.getCarers)
        if (res != null) {
            yield put(getCarersSuccess(res))
            console.log('>>>>>>>>getCarersSuccess', res);
        } else {
            yield put(getCarersFail('Get Failed'))
            console.log('>>>>>>>getCarersFail: ');
        }
    } catch (err) {
        console.log('khanh-saga', 'getCarersError', err);
    }
}