import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import styles from './styles'
import Button from '../../../src/components/Button'
import LedgerEntry from './components/LedgerEntry'

class Ledger extends React.Component {
    constructor() {
        super()
        this.getDate = this.getDate.bind(this)
        this.handlePress = this.handlePress.bind(this)
        this.state = {
            ledgerEntries: [],
            showDatePicker: false,
        }
    }

    getDate() {
        const today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1; //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + '-' + mm + '/' + dd;   
    }

    handlePress() {
        const newEntry = {
            date: this.getDate().slice(5),
            description: 'wasted it',
        }
        this.setState({
            ledgerEntries: [...this.state.ledgerEntries, newEntry]
        })
    }

    render() {
        const { ledgerEntries } = this.state
        return (
            <View style={styles.ledger}>
                <ScrollView style={styles.ledgerEntries}>
                    {
                        // This will render a row for each data element.
                        ledgerEntries.map((entry, i) => 
                            <LedgerEntry
                                entry={entry}
                                key={i}
                            />
                        )
                    }
                    <View style={styles.buttonContainer}>
                        <Button label="New Entry" onPress={this.handlePress} raised/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default Ledger

