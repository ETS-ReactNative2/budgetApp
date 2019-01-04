import * as actions from './actionTypes'

export function accountAdd({ moneyDestination, amount = 0 }) {
    const numAmount = parseFloat(Math.round(amount * 100) / 100).toFixed(2)
    return {
        type: actions.ACCOUNT_ADD,
        name: moneyDestination,
        amount: numAmount,
    }
}

export function accountSubtract({ moneySource, amount = 0 }) {
    const numAmount = parseFloat(Math.round(amount * 100) / 100).toFixed(2)
    return {
        type: actions.ACCOUNT_SUBTRACT,
        name: moneySource,
        amount: numAmount,
    }
}

export function editAccount({ account, amount = 0 }) {
    const numAmount = parseFloat(Math.round(amount * 100) / 100).toFixed(2)
    return {
        type: actions.EDIT,
        name: account,
        amount: numAmount,
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
