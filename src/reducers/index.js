import { combineReducers } from 'redux'

import entryReducer from '../screens/Ledger/reducers/entry'
import filterReducer from '../screens/Ledger/reducers/filters'
import ledgerModalReducer from '../screens/Ledger/reducers/ledgerModal'

const rootReducer = combineReducers({
    ledgerEntries: entryReducer,
    filter: filterReducer,
    ledgerModal: ledgerModalReducer,
})

export default rootReducer
