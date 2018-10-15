import _ from 'lodash'
import * as actions from './actionTypes'

export function addTodo(name, completed) {
    return {
        type: actions.ADD,
        todo: {
            id: _.uniqueId('todo_'),
            name,
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
