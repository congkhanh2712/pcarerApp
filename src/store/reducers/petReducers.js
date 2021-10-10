import { actionTypes } from "../actions/petAction";
const initialState = {
    get_pets: {
        data: null,
        error: null,
    },
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        //get_pets
        case actionTypes.GET_PETS_SUCCESS:
            return Object.assign({}, state, {
                ...state,
                get_pets: {
                    data: action.data,
                    error: null
                },
            });
        case actionTypes.GET_PETS_FAIL:
            return Object.assign({}, state, {
                ...state,
                get_pets: {
                    data: null,
                    error: action.error
                },
            });
        default:
            return state;
    }
}