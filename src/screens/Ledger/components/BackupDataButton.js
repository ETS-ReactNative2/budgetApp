import React from 'react'
import { StyleSheet } from 'react-native'
import { IconButton, Colors } from 'react-native-paper'
import email from 'react-native-email'

export class BackupDataButton extends React.Component {
    handleEmail = () => {
        const to = ['spencerkingman@gmail.com'] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            // cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
            // bcc: 'mee@mee.com', // string or array of email addresses
            subject: 'budgetApp Data Backup',
            body: JSON.stringify(this.props.ledgerEntries),
        }).catch(console.error)
    }

    render() {
        return (
            <IconButton
                icon="backup"
                color="rgba(126, 89, 191, 0.25)"
                size={45}
                style={styles.button}
                onPress={this.handleEmail}
            />
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        borderRadius: 37,
        bottom: 10,
        height: 45,
        position: 'absolute',
        left: 10,
        width: 45,
        zIndex: 1,
    },
})
