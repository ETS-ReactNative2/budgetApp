import * as actions from './actionTypes'

export function accountAdd({ moneyDestination, amount = 0 }) {
    return {
        type: actions.ACCOUNT_ADD,
        name: moneyDestination,
        amount,
    }
}

export function accountSubtract({ moneySource, amount = 0 }) {
    return {
        type: actions.ACCOUNT_SUBTRACT,
        name: moneySource,
        amount,
    }
}

export function editAccount({ account, amount = 0 }) {
    return {
        type: actions.EDIT,
        name: account,
        amount,
    }
}

export function showModal(displayName, previousAmount) {
    return {
        type: actions.SET_ACCOUNTS_MODAL_VISIBILITY,
        displayName,
        previousAmount,
        visible: true,
    }
}

export function hideModal() {
    return {
        type: actions.SET_ACCOUNTS_MODAL_VISIBILITY,
        visible: false,
    }
}
