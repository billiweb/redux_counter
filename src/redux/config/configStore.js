// 중앙 데이터 관리소 (store)를 설정하는 부분
import {createStore} from "redux"
import { combineReducers } from "redux"
import users from "../modules/users"
import counter from "../modules/counter"

// store에는 REducer(제어)와 state(상태) 둘 다 있다

const rootReducer = combineReducers({
    counter,
    users: users,
})
const store = createStore(rootReducer)

export default store;