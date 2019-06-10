import { useEffect } from "react";
import { useActions } from "./actions";

import React, { createContext, useReducer, useContext } from "react";
import { initialState} from './setReducers'
import reducers from './combineReducer'

const StoreContext = createContext(initialState)

const StoreProvider = ({ children }) => {
  /*
     使用 useReducer 將 Reducer 和 初始 State 分别传入，
     会回传一个阵列，解构赋值将阵列的0，1分别放到 state 和 dispatch 中，
     state 會隨著 Reducer 回传的 state 改变，
     dispatch 是用來和 Reducer 互通的 Function 。
     initState 不再是传入 Reducer 中， 而是在 useReducer 时一并处理
    */
  const [state, dispatch] = useReducer(reducers, initialState)
  //从useActions得到actions，并把它绕床给Context
  const actions = useActions(state, dispatch)
  // const actions = {
  //   ...useActions
  // }

  //log新的状态
  useEffect( () => console.log({ newState: state }), [state], dispatch)

  //Render state, dispatch and special case actions
  return (
    <StoreContext.Provider value={{ state, dispatch, actions}}>
      {children}
    </StoreContext.Provider>
  )
}

export { StoreContext, StoreProvider}

// export const useStore = store => {
//   const { state, dispatch } = useContext(StoreContext);
//   return { state, dispatch };
// };
