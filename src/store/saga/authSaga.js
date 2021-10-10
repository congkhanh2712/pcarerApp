import AsyncStorage from '@react-native-async-storage/async-storage';
import { call, put } from 'redux-saga/effects';
import { authApi } from '../../api';
import {
    loginSuccess,
    loginFail,
} from '../actions/authAction';

export function* loginRequestSaga(action) {
    try {
        console.log('>>>>>>>loginAdmin', action.payload);
        const res = yield call(authApi.login, action.payload)
        if (res != null && res.succeed) {
            yield put(loginSuccess(res.data))
            AsyncStorage.setItem('@user', JSON.stringify(res.data))
            console.log('>>>>>>>>LoginSuccess', res.data);
        } else {
            yield put(loginFail(res.message))
            console.log('>>>>>>>LoginFail: ', res.message);
        }
    } catch (err) {
        console.log('khanh-saga', 'loginAdminError', err);
    }
}