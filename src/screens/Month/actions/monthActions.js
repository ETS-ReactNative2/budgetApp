import * as actions from './actionTypes'

export function editMonthTarget({ monthTarget = 0 }) {
    return {
        type: actions.EDIT_TARGET,
        monthTarget,
    }
}

export function editMonthCurrent({ monthCurrent = 0 }) {
    return {
        type: actions.EDIT_CURRENT,
        monthCurrent,
    }
}

export function showModal() {
    return {
        type: actions.SET_MONTH_MODAL_VISIBILITY,
        visible: true,
    }
}

export function hideModal() {
    return {
        type: actions.SET_MONTH_MODAL_VISIBILITY,
        visible: false,
    }
}
