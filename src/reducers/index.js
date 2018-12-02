import { combineReducers } from 'redux'

import entryReducer from '../screens/Ledger/reducers/entry'
import accountReducer from '../screens/Accounts/reducers/account'
import filterReducer from '../screens/Ledger/reducers/filters'
import accountsModalReducer from '../screens/Accounts/reducers/accountsModal'
import ledgerModalReducer from '../screens/Ledger/reducers/ledgerModal'

const rootReducer = combineReducers({
    accounts: accountReducer,
    ledgerEntries: entryReducer,
    filter: filterReducer,
    accountsModal: accountsModalReducer,
    ledgerModal: ledgerModalReducer,
})

export default rootReducer
