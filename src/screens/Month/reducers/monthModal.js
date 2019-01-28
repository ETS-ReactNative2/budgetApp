import * as actions from '../actions/actionTypes'

const initialState = {
    visible: false,
    previousAmount: '0',
}

export default function monthModalVisibilityReducer(state = initialState, action = {}) {
    switch (action.type) {
        case actions.SET_MONTH_MODAL_VISIBILITY:
            return {
                ...state,
                visible: action.visible,
                previousAmount: action.previousAmount,
            }
        default:
            return state
    }
}
