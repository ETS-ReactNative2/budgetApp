import { combineReducers } from 'redux'

import todoReducer from '../screens/Month/reducers/todo'
import filterReducer from '../screens/Month/reducers/filters'
import addModalReducer from '../screens/Month/reducers/add-modal'

const rootReducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer,
    addModal: addModalReducer,
})

export default rootReducer
