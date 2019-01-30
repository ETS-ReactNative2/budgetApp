import { combineReducers } from 'redux'

import entryReducer from '../screens/Ledger/reducers/entry'
import accountReducer from '../screens/Accounts/reducers/account'
import filterReducer from '../screens/Ledger/reducers/filters'
import accountsModalReducer from '../screens/Accounts/reducers/accountsModal'
import ledgerModalReducer from '../screens/Ledger/reducers/ledgerModal'
import monthReducer from '../screens/Month/reducers/month'
import monthModalVisibilityReducer from '../screens/Month/reducers/monthModal'

const rootReducer = combineReducers({
    accounts: accountReducer,
    filter: filterReducer,
    ledgerEntries: entryReducer,
    month: monthReducer,
    accountsModal: accountsModalReducer,
    ledgerModal: ledgerModalReducer,
    monthModal: monthModalVisibilityReducer,
})

export default rootReducer
