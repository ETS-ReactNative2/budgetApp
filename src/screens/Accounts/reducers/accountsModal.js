import * as actions from '../actions/actionTypes'

const initialState = {
    visible: false,
    displayName: "I'm sorry, there has been an error.",
    previousAmount: '0',
}

export default function accountsModalVisibilityReducer(state = initialState, action = {}) {
    switch (action.type) {
        case actions.SET_ACCOUNTS_MODAL_VISIBILITY:
            return {
                ...state,
                visible: action.visible,
                previousAmount: action.previousAmount,
                displayName: action.displayName,
            }
        default:
            return state
    }
}
