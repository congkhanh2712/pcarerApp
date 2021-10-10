import { call, put } from 'redux-saga/effects';
import { petApi } from '../../api';
import {
    getPetsSuccess,
    getPetsFail,
} from '../actions/petAction';

export function* getPetsRequestSaga() {
    try {
        console.log('>>>>>>>getPetsAdmin');
        const res = yield call(petApi.getAllPets)
        if (res != null) {
            yield put(getPetsSuccess(res))
            console.log('>>>>>>>>getPetsSuccess', res);
        } else {
            yield put(getPetsFail('Get Failed'))
            console.log('>>>>>>>getPetsFail: ');
        }
    } catch (err) {
        console.log('khanh-saga', 'getPetsError', err);
    }
}