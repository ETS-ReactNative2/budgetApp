import * as actions from '../actions/actionTypes'

const initialState = {
    monthTarget: 0,
    monthCurrent: 0,
}

export default function monthReducer(state = initialState, action = {}) {
    const numTarget = parseFloat(action.monthTarget)
    const numCurrent = parseFloat(action.monthCurrent)
    switch (action.type) {
        case actions.EDIT_TARGET:
            return {
                ...state,
                monthTarget: numTarget,
            }
        case actions.EDIT_CURRENT:
            return {
                ...state,
                monthCurrent: numCurrent,
            }
        default:
            return state
    }
}
