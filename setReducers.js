import { useActions } from './actions'
const initialState = {
  // techList: ["TypeScript", "React Hooks"], 
  userList: [{ username: 'e', password: 'f', redirectTo: ''}],
  postList: [{ email: '123@qq.com'}],
  commentList: [],
}

const types = {

  AUTH_SUCCESS: "AUTH_SUCCESS",
  ERROR_MSG: "ERROR_MSG"
}


const initUserState = {
  username: '',
  msg: '',
  redirectTo: ''
}


//直接将 initState 给Reducer
const userReducer = (state = initialState, action) => {
  console.log('userReducer state', state, 'action', action)

  switch (action.type) {
    case types.AUTH_SUCCESS:
      return {
        ...state,
        userList: [...state.userList, action.payload],
      };
    case types.ERROR_MSG:
      return {
        ...state,
        userList: state.userList.push(
          {...action.payload, redirectTo: '/'}
        ) 
      };
  }
}

const postReducer = (state = initialState, action) => {
  console.log('postReducer state', state, 'action', action)
  switch (action.type) {
    case types.AUTH_SUCCESS:
      return {
        ...state,
        userList: [...state.userList, action.payload, {redirectTo: '/'}]
      };
    case types.ERROR_MSG:
      return {
        ...state,
        userList: [...state.userList, action.payload]
      };
  }
}





export { initialState, types, userReducer, postReducer}