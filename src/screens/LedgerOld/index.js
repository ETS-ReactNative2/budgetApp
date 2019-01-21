/* eslint-disable */
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import styles from './styles'
import Button from '../../components/Button'
import LedgerEntry from './components/LedgerEntry'
import { addLedgerEntry, updateEntryDate, updateEntryDescription } from './actions'

class Ledger extends React.Component {
    constructor() {
        super()
        this.getDate = this.getDate.bind(this)
        this.handlePress = this.handlePress.bind(this)
        this.state = {
            showDatePicker: false,
        }
    }

    getDate() {
        const today = new Date()
        const dd = today.getDate()
        const mm = today.getMonth() + 1 // January is 0!
        const yyyy = today.getFullYear()
        return `${yyyy}-${mm}/${dd}`
    }

    handlePress() {
        const newEntry = {
            date: this.getDate().slice(5),
            description: 'wasted it',
        }
        this.props.addLedgerEntry(newEntry)
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.ledger}>
                    <View style={styles.buttonContainer}>
                        <Button label="New Entry" onPress={this.handlePress} raised />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => ({
    ledger: state.ledger,
})

const mapDispatchToProps = dispatch => ({
    addLedgerEntry: ledgerEntry => dispatch(addLedgerEntry(ledgerEntry)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Ledger)
