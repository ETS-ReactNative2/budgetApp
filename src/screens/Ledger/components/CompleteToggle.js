import React from 'react'
import { Alert, TouchableOpacity, StyleSheet } from 'react-native'
import * as ledgerActions from '../actions/ledgerActions'
import store from '../../../store'

class CompleteToggle extends React.Component {
    getStyle() {
        if (this.props.checked) {
            return styles.active
        }
        return styles.inactive
    }

    handleEntryPress = () => {
        Alert.alert(
            'Entry Pressed',
            `Do you want to delete the "${this.props.description}" entry?`,
            [
                { text: 'Cancel', onPress: () => {}, style: 'cancel' },
                {
                    text: 'Delete',
                    onPress: () => this.props.onPress(this.props.guid),
                },
            ],
            { cancelable: false },
        )
    }

    render() {
        return (
            <TouchableOpacity
                style={[styles.button, this.getStyle()]}
                onPress={this.handleEntryPress}
            />
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width: 20,
        height: 20,
        borderRadius: 10,
    },
    active: {
        backgroundColor: '#81c04d',
    },
    inactive: {
        backgroundColor: 'gray',
    },
})

export default CompleteToggle
