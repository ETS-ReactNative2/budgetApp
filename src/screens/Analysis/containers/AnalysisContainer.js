import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { PieChartWithLabel } from '../components/PieChartWithLabel'
import { Analysis } from '../components/Analysis'
// import { bindActionCreators } from 'redux'
// import * as AnalysisActions from '../actions/AnalysisActions'
import { VisibilityFilters } from '../actions/actionTypes'
import store from '../../../store'

const mapStateToProps = state => ({
    ledgerEntries: state.ledgerEntries,
    // ledgerEntries: state.ledgerEntries.filter(entry => {
    //     if (state.filter === VisibilityFilters.ALL) {
    //         return true
    //     }
    //     if (state.filter === VisibilityFilters.COMPLETED) {
    //         return entry.completed
    //     }
    //     if (state.filter === VisibilityFilters.INCOMPLETE) {
    //         return !entry.completed
    //     }
    //     return true
    // }),
    filter: state.filter,
})

export default connect(
    mapStateToProps,
    null,
)(Analysis)
