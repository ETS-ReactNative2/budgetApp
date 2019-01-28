import * as actions from './actionTypes'

export function editMonthLimit({ amount = 0 }) {
    return {
        type: actions.EDIT,
        amount,
    }
}

export function showModal(previousAmount) {
    return {
        type: actions.SET_MONTH_MODAL_VISIBILITY,
        previousAmount,
        visible: true,
    }
}

export function hideModal() {
    return {
        type: actions.SET_MONTH_MODAL_VISIBILITY,
        visible: false,
    }
}
