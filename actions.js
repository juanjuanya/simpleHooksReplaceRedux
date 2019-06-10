import { types, initialState} from "./setReducers"
// import { initialState } from setRedu

import { AUTH_SUCCESS, ERROR_MSG, RECEIVE_USER, RESET_USER, POST_SUBMIT, RECEIVE_POSTLIST } from './action-types'
import { reqLogin, reqRegister, reqUser, reqPost, reqPostList } from '../api'

export const useActions = (state, dispatch) => {

  function sslogin({username, password}) {
    const a = state.userList.indexOf(username)
    debugger
    const response = reqLogin({username, password})
    const result = response.data
    if (a !== -1) {
      alert("Tech is defined in list")
    } else {
      dispatch({
        type: types.AUTH_SUCCESS,
        payload: result.data
      })
    }
  }
  return {
    sslogin
  }
}

