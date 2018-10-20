import React from 'react'
import { StyleSheet } from 'react-native'
import { IconButton, Colors } from 'react-native-paper'

const NewEntryButton = ({ showModal }) => (
    <IconButton
        icon="add-circle"
        color={Colors.blue200}
        size={75}
        style={styles.button}
        onPress={showModal}
    />
)

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        borderRadius: 37,
        bottom: 10,
        height: 75,
        position: 'absolute',
        right: 10,
        width: 75,
        zIndex: 1,
    },
})

export default NewEntryButton
