export const actionTypes = {
    //Login
    GET_PETS_REQUEST: 'GET_PETS_REQUEST',
    GET_PETS_SUCCESS: 'GET_PETS_SUCCESS',
    GET_PETS_FAIL: 'GET_PETS_FAIL',
}

//Login
export function getPetsRequest() {
    return { type: actionTypes.GET_PETS_REQUEST }
}

export function getPetsSuccess(data) {
    return { type: actionTypes.GET_PETS_SUCCESS, data }
}

export function getPetsFail(error) {
    return { type: actionTypes.GET_PETS_FAIL, error }
}