import { actionTypes } from "../actions/reviewAction";
const initialState = {
    get_reviews: {
        data: null,
        error: null,
    },
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        //get_pets
        case actionTypes.GET_REVIEWS_SUCCESS:
            return Object.assign({}, state, {
                ...state,
                get_reviews: {
                    data: action.data,
                    error: null
                },
            });
        case actionTypes.GET_REVIEWS_FAIL:
            return Object.assign({}, state, {
                ...state,
                get_reviews: {
                    data: null,
                    error: action.error
                },
            });
        default:
            return state;
    }
}