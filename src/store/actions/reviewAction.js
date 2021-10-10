export const actionTypes = {
    //Login
    GET_REVIEWS_REQUEST: 'GET_REVIEWS_REQUEST',
    GET_REVIEWS_SUCCESS: 'GET_REVIEWS_SUCCESS',
    GET_REVIEWS_FAIL: 'GET_REVIEWS_FAIL',
}

//Login
export function getReviewsRequest(payload) {
    return { type: actionTypes.GET_REVIEWS_REQUEST, payload }
}

export function getReviewsSuccess(data) {
    return { type: actionTypes.GET_REVIEWS_SUCCESS, data }
}

export function getReviewsFail(error) {
    return { type: actionTypes.GET_REVIEWS_FAIL, error }
}