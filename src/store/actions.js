import * as types from './mutation-types'

export const loginSuccess = ({commit},data) => {
    return commit(types.LOGIN_SUCCESS,data)
}
export const loginFailure = ({commit}) => {
    return commit(types.LOGIN_FAILURE)
}
export const auth = ({commit},data) => {
    return commit('AUTH')
}
