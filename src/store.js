import { createStore } from "redux";
import taskReducer from './utils/taskReducer'

const store = createStore(taskReducer)

export default store
