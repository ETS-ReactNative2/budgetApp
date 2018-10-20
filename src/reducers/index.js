import { combineReducers } from 'redux'

import todoReducer from '../screens/Ledger/reducers/todo'
import filterReducer from '../screens/Ledger/reducers/filters'
import addModalReducer from '../screens/Ledger/reducers/add-modal'

const rootReducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer,
    addModal: addModalReducer,
})

export default rootReducer
