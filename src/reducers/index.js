import { combineReducers } from 'redux'

import todoReducer from '../features/Month/reducers/todo'
import filterReducer from '../features/Month/reducers/filters'
import addModalReducer from '../features/Month/reducers/add-modal'

const rootReducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer,
    addModal: addModalReducer,
})

export default rootReducer
