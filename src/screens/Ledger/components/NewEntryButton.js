import React from 'react'
import { StyleSheet } from 'react-native'
import { IconButton } from 'react-native-paper'

export const NewEntryButton = ({ showModal }) => (
    <IconButton
        icon="add-circle"
        color="rgb(126, 89, 191)"
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
