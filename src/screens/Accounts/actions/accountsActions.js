import * as actions from './actionTypes'

export function editTodo({ account, amount = 0 }) {
    const numAmount = parseFloat(Math.round(amount * 100) / 100).toFixed(2)
    return {
        type: actions.EDIT,
        account: {
            name: account,
            amount: numAmount,
        },
    }
}

export function showModal() {
    return {
        type: actions.SET_ACCOUNTS_MODAL_VISIBILITY,
        visible: true,
    }
}

export function hideModal() {
    return {
        type: actions.SET_ACCOUNTS_MODAL_VISIBILITY,
        visible: false,
    }
}
