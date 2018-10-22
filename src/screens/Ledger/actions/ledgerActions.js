import _ from 'lodash'
import * as actions from './actionTypes'

export function addLedgerEntry(description, completed) {
    return {
        type: actions.ADD,
        entry: {
            id: _.uniqueId('entry_'),
            description,
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
