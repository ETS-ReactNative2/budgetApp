import _ from 'lodash'
import * as actions from '../actions/actionTypes'

export default function accountReducer(accounts = [], action = {}) {
    // const index = _.findIndex(ledgerEntries, entry => entry.guid === action.guid)

    // switch (action.type) {
    //     case actions.ADD:
    //         return [action.entry, ...ledgerEntries]

    //     case actions.COMPLETE:
    //         if (index === -1) {
    //             return ledgerEntries
    //         }
    //         return [
    //             ...ledgerEntries.slice(0, index),
    //             Object.assign({}, ledgerEntries[index], {
    //                 completed: true,
    //             }),
    //             ...ledgerEntries.slice(index + 1),
    //         ]

    //     case actions.DELETE:
    //         const filtered = ledgerEntries.filter(entry => entry.guid !== action.guid)
    //         return filtered

    //     case actions.EDIT:
    //         return [...ledgerEntries]

    //     case actions.INCOMPLETE:
    //         if (index === -1) {
    //             return ledgerEntries
    //         }
    //         return [
    //             ...ledgerEntries.slice(0, index),
    //             Object.assign({}, ledgerEntries[index], {
    //                 completed: false,
    //             }),
    //             ...ledgerEntries.slice(index + 1),
    //         ]

    //     default:
    return accounts
    // }
}
