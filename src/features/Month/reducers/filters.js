import * as actions from '../actions/actionTypes'

const { VisibilityFilters } = actions
const initialState = VisibilityFilters.ALL

const visibilityReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case actions.SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

export default visibilityReducer
