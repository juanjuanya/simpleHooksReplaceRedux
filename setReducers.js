const initialState = {
  // techList: ["TypeScript", "React Hooks"], 
  userList: [{ username: 'e', password: 'f'}],
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

// 产生user状态的reducer  ,
function user(state = initUser, action) {
  switch (action.type) {
    case AUTH_SUCCESS: 
      return {...action.data, redirectTo: '/'}  // data: {username, email, avatar, _id}
    case ERROR_MSG:
      return {...state, msg: action.data}
    case RECEIVE_USER: 
      return action.data
    case RESET_USER:
      return {...initUser, msg: action.data}
    default: 
      return state
  }
}

//直接将 initState 给Reducer
const userReducer = (state = initialState, action) => {
  console.log('userReducer state', state, 'action', action)
  switch (action.type) {
    case types.AUTH_SUCCESS:
      return {
        ...state,
        userList: [...state.userList, action.payload]
      };
    case types.ERROR_MSG:
      return {
        ...state,
        userList: [...state.userList, action.payload]
      };
  }
}

const postReducer = (state = initialState, action) => {
  console.log('postReducer state', state, 'action', action)
  switch (action.type) {
    case types.AUTH_SUCCESS:
      return {
        ...state,
        userList: [...state.userList, action.payload]
      };
    case types.ERROR_MSG:
      return {
        ...state,
        userList: [...state.userList, action.payload]
      };
  }
}



export { initialState, types, userReducer, postReducer}