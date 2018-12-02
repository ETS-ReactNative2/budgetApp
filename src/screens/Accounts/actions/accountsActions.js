import * as actions from './actionTypes'
import { guidGenerator } from '../../../utils/guidGenerator'

export function addLedgerEntry(
    { amount = 0, category, date, description, moneyDestination, moneySource },
    completed,
) {
    const numAmount = parseFloat(Math.round(amount * 100) / 100).toFixed(2)
    return {
        type: actions.ADD,
        entry: {
            guid: guidGenerator(),
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

export function deleteTodo(guid) {
    return {
        type: actions.DELETE,
        guid,
    }
}

export function editTodo(guid) {
    return {
        type: actions.EDIT,
        guid,
    }
}

export function completeTodo(guid) {
    return {
        type: actions.COMPLETE,
        guid,
    }
}

export function incompleteTodo(guid) {
    return {
        type: actions.INCOMPLETE,
        guid,
    }
}
