import * as actions from './actionTypes'

export function showModal() {
    return {
        type: actions.SET_ACCOUNTS_MODAL_VISIBILITY,
        accountsModalVisible: true,
    }
}

export function hideModal() {
    return {
        type: actions.SET_ACCOUNTS_MODAL_VISIBILITY,
        accountsModalVisible: false,
    }
}
