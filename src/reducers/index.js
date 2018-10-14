import { combineReducers } from 'redux'

import todoReducer from '../../src/features/Month/reducers/todo'
import filterReducer from '../../src/features/Month/reducers/filters'
import addModalReducer from '../../src/features/Month/reducers/add-modal'

const rootReducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
  addModal: addModalReducer
})

export default rootReducer
