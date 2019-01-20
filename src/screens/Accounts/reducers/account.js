import _ from 'lodash'
import * as actions from '../actions/actionTypes'

export default function accountReducer(accounts = [], action = {}) {
    const index = _.findIndex(accounts, entry => entry.name === action.name)
    const numAmount = parseFloat(action.amount)
    switch (action.type) {
        case actions.ACCOUNT_ADD:
            if (index === -1) {
                return [...accounts, { name: action.name, amount: numAmount }]
            }
            return [
                ...accounts.slice(0, index),
                Object.assign({}, accounts[index], {
                    amount: accounts[index].amount + numAmount,
                }),
                ...accounts.slice(index + 1),
            ]
        case actions.ACCOUNT_SUBTRACT:
            if (index === -1) {
                return [...accounts, { name: action.name, amount: numAmount * -1 }]
            }
            return [
                ...accounts.slice(0, index),
                Object.assign({}, accounts[index], {
                    amount: accounts[index].amount - numAmount,
                }),
                ...accounts.slice(index + 1),
            ]
        case actions.EDIT:
            console.log('reducer', action)
            return [
                ...accounts.slice(0, index),
                Object.assign({}, accounts[index], {
                    amount: numAmount,
                }),
                ...accounts.slice(index + 1),
            ]
        default:
            return accounts
    }
}
