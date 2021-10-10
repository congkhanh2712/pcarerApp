export const actionTypes = {
    //get carers
    GET_CARERS_REQUEST: 'GET_CARERS_REQUEST',
    GET_CARERS_SUCCESS: 'GET_CARERS_SUCCESS',
    GET_CARERS_FAIL: 'GET_PETS_FAIL',
}

//Login
export function getCarersRequest() {
    return { type: actionTypes.GET_CARERS_REQUEST }
}

export function getCarersSuccess(data) {
    return { type: actionTypes.GET_CARERS_SUCCESS, data }
}

export function getCarersFail(error) {
    return { type: actionTypes.GET_CARERS_FAIL, error }
}