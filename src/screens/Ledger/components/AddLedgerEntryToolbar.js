import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import DatePicker from 'react-native-datepicker'

export class AddLedgerEntryToolbar extends React.Component {
    constructor() {
        super()
    }

    render() {
        const { date, hideModal } = this.props
        return (
            <View style={styles.toolbar}>
                <View style={styles.toolbarButton}>
                    <DatePicker
                        style={styles.datePicker}
                        date={date}
                        mode="date"
                        placeholder="date"
                        format="MM/DD YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateInput: {
                                flex: 1,
                                height: 50,
                                borderWidth: 0,
                                borderColor: '#aaa',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                marginLeft: 15,
                            },
                            dateText: {
                                color: 'white',
                            },
                            dateTouchBody: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                            },
                        }}
                        showIcon
                        onDateChange={date => this.props.onDateChange(date)}
                    />
                </View>
                <Text style={styles.toolbarTitle}>Add Ledger Entry</Text>
                <TouchableOpacity style={styles.toolbarButton} onPress={hideModal}>
                    <Text style={styles.toolbarText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#51904d',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    toolbarButton: {
        width: 50,
    },
    toolbarText: {
        color: '#fff',
        textAlign: 'center',
    },
    toolbarTitle: {
        flex: 1,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
})
