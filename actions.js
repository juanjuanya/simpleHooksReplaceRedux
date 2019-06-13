import { types, initialState} from "./setReducers"
// import { initialState } from setRedu

import { AUTH_SUCCESS, ERROR_MSG, RECEIVE_USER, RESET_USER, POST_SUBMIT, RECEIVE_POSTLIST } from './action-types'
import { reqLogin, reqRegister, reqUser, reqPost, reqPostList } from '../api'

export const useActions =  (state, dispatch) => {

   async function sslogin(username, password) {
     
    console.log('.....actions', username, password)
    const a = state.userList.indexOf(username)
    const response = await reqLogin({username, password})
      .catch(error => console.error('Error:', error))
      .then(response => {
        console.log(response)
        debugger
        dispatch({ //通过dispatch发送信息给StoreContext
          type: types.AUTH_SUCCESS,
          payload: response.data
        })
      });
     
  }
  return {
    sslogin
  }
}