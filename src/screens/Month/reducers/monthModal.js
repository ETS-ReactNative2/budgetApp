import * as actions from '../actions/actionTypes'

const initialState = {
    visible: false,
}

export default function monthModalReducer(state = initialState, action = {}) {
    switch (action.type) {
        case actions.SET_MONTH_MODAL_VISIBILITY:
            return {
                ...state,
                visible: action.visible,
            }
        default:
            return state
    }
}
