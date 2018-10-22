import _ from 'lodash'
import * as actions from './actionTypes'

export function addLedgerEntry(
    { amount = 0, category, date, description, moneyDestination, moneySource },
    completed,
) {
    const numAmount = parseFloat(Math.round(amount * 100) / 100).toFixed(2)
    return {
        type: actions.ADD,
        entry: {
            id: _.uniqueId('entry_'),
            amount: numAmount,
            category,
            date,
            description,
            moneyDestination,
            moneySource,
            completed: completed === true,
        },
    }
}

export function completeTodo(id) {
    return {
        type: actions.COMPLETE,
        id,
    }
}

export function incompleteTodo(id) {
    return {
        type: actions.INCOMPLETE,
        id,
    }
}
