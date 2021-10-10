import { actionTypes } from "../actions/carerAction";
const initialState = {
    get_carers: {
        data: null,
        error: null,
    },
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        //get_carers
        case actionTypes.GET_CARERS_SUCCESS:
            return Object.assign({}, state, {
                ...state,
                get_carers: {
                    data: action.data,
                    error: null
                },
            });
        case actionTypes.GET_CARERS_FAIL:
            return Object.assign({}, state, {
                ...state,
                get_carers: {
                    data: null,
                    error: action.error
                },
            });
        default:
            return state;
    }
}