import * as actions from '../actions/actionTypes'

const initialState = {
    allegent: {
        amount: 0,
    },
    capitalOneCredit: {
        amount: 0,
    },
    capitalOneLongTerm: {
        amount: 0,
    },
    capitalOneShortTerm: {
        amount: 0,
    },
    capitalOneUtilities: {
        amount: 0,
    },
    capitalOneGifts: {
        amount: 0,
    },
    capitalOneExtras: {
        amount: 0,
    },
    capitalOneVacation: {
        amount: 0,
    },
    cash: {
        amount: 0,
    },
    chaseCredit: {
        amount: 0,
    },
    citizens: {
        amount: 0,
    },
    costcoCredit: {
        amount: 0,
    },
    gift: {
        amount: 0,
    },
    library: {
        amount: 0,
    },
    niche: {
        amount: 0,
    },
    sale: {
        amount: 0,
    },
    synchrony: {
        amount: 0,
    },
    other: {
        amount: 0,
    },
}

export default function accountReducer(state = initialState, action = {}) {
    const updatedAccounts = state.accounts
    switch (action.type) {
        case actions.ACCOUNT_ADD:
            if (Object.keys(updatedAccounts).includes(action.account)) {
                updatedAccounts[action.name].amount += action.amount
            } else {
                updatedAccounts[action.name].amount = action.amount
            }
            return { ...state, accounts: updatedAccounts }
        case actions.ACCOUNT_SUBTRACT:
            if (Object.keys(updatedAccounts).includes(action.account)) {
                updatedAccounts[action.name].amount -= action.amount
            } else {
                updatedAccounts[action.name].amount = action.amount
            }
            return { ...state, accounts: updatedAccounts }
        case actions.EDIT:
            updatedAccounts[action.account].amount = action.amount
            return { ...state, accounts: updatedAccounts }
        default:
            return { ...state, accounts: initialState }
    }
}
