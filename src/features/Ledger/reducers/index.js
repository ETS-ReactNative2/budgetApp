/*eslint-disable*/
import { ADD_LEDGER_ENTRY, UPDATE_ENTRY_DATE, UPDATE_ENTRY_DESCRIPTION } from '../actions'

export default (state = { ledger: [] }, action) => {
    console.log('REDUCER', action)
    switch (action.type) {
        case ADD_LEDGER_ENTRY:
            return {
                ...state,
                ledger: state.ledger.push(action.ledgerEntry),
            }
        case UPDATE_ENTRY_DATE:
            tempLedger[action.index].date = action.date
            return {
                ...state,
                ledger: tempLedger,
            }
        case UPDATE_ENTRY_DESCRIPTION:
            tempLedger[action.index].description = action.description
            return {
                ...state,
                ledger: tempLedger,
            }
        default:
            return state
    }
}
