import * as actions from '../actions/actionTypes'

export default function monthReducer(monthLimit, action = {}) {
    const numAmount = parseFloat(action.amount)
    switch (action.type) {
        case actions.EDIT:
            return numAmount
        default:
            return monthLimit
    }
}
