import { userReducer,postReducer } from './setReducers.js'



const combineReducer = reducers => { //{user: f}{post}
  const reducersKeys = Object.keys(reducers)
  debugger
  //用来放所有 Reducer 的 state
  let objInitState = {}

  //user
  reducersKeys.forEach((key) => {
    //传入空type, Reducer内会有预设 action 为回传目前的 state
    const initState = reducers[key](undefined, {
      type: ''
    })
    if ( initState === 'undefined' ) {
      //一个都没有的话提示错误
      throw new Error(`${key} does not return state`)
    }
    // 如果有预设值就放进 objInitState, 即检测state时将回传的初始值State存进objInitState
     objInitState[key] = initState
  })


  // 返回一个和 Reducer一样的纯函数，接收action去干活
  return (state, action) => {
    console.log('combineReducer', 'state', state, action.actions,reducersKeys,)
    // state.userList.indexOf(action.payload.username))
    if (action) {
      //将指令分给所有的 Reducer 去执行
      reducersKeys.forEach((key) => {
        const previousState = objInitState[key]
        console.log('previousState',previousState)
        //执行后再将state更新给objInitState
        objInitState[key] = reducers[key](previousState, action.actions)
      })
    }
    // 无论有没有 action 处理，都回传一个新的 objInitState
    return {
      ...objInitState
    } 
  }
}

//合并 Reducer
const reducers = combineReducer({
  user: userReducer,
  post: postReducer,
})

export default reducers