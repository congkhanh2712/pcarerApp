export const actionTypes = {
  //Login
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
  //get current user
  SET_USER: 'SET_USER',
  REMOVE_USER: 'REMOVE_USER',
}

//Login
export function loginRequest(payload) {
  return { type: actionTypes.LOGIN_REQUEST, payload }
}

export function loginSuccess(data) {
  return { type: actionTypes.LOGIN_SUCCESS, data }
}

export function loginFail(error) {
  return { type: actionTypes.LOGIN_FAIL, error }
}
//get current user
export function setUser(data) {
  return { type: actionTypes.SET_USER, data }
}
export function removeUser() {
  return { type: actionTypes.REMOVE_USER }
}