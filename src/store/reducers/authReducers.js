import { actionTypes } from "../actions/authAction";

const initialState = {
    login: {
        data: null,
        error: null,
    },
    current_user: null,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        //login
        case actionTypes.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                ...state,
                login: {
                    data: action.data,
                    error: null
                },
            });
        case actionTypes.LOGIN_FAIL:
            return Object.assign({}, state, {
                ...state,
                login: {
                    data: null,
                    error: action.error
                },
            });
        case actionTypes.SET_USER:
            return Object.assign({}, state, {
                ...state,
                current_user: action.data,
            });
        case actionTypes.REMOVE_USER:
            return Object.assign({}, state, {
                ...state,
                current_user: null,
            });
        default:
            return state;
    }
}