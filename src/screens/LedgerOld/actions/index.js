export const ADD_LEDGER_ENTRY = 'ADD_LEDGER_ENTRY'
export const UPDATE_ENTRY_DATE = 'UPDATE_ENTRY_DATE'
export const UPDATE_ENTRY_DESCRIPTION = 'UPDATE_ENTRY_DESCRIPTION'

export const addLedgerEntry = ledgerEntry => ({
    type: ADD_LEDGER_ENTRY,
    ledgerEntry,
})
export const updateEntryDate = (index, date) => ({
    type: UPDATE_ENTRY_DATE,
    index,
    date,
})
export const updateEntryDescription = (index, description) => ({
    type: UPDATE_ENTRY_DESCRIPTION,
    index,
    description,
})
