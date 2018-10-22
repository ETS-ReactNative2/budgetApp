import * as actions from '../actions/actionTypes'

const initialState = {
    visible: false,
}

export default function ledgerModalVisibilityReducer(state = initialState, action = {}) {
    switch (action.type) {
        case actions.SET_LEDGER_MODAL_VISIBILITY:
            return {
                ...state,
                visible: action.visible,
            }
        default:
            return state
    }
}
