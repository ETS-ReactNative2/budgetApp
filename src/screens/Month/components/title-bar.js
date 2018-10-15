import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'

function capitalize(word) {
    const lower = word.toLowerCase()
    return lower.slice(0, 1).toUpperCase() + lower.slice(1)
}

const TitleBar = ({ activeFilter, showModal }) => (
    <View style={styles.toolbar}>
        <Text style={styles.button} />
        <Text style={styles.title}>{capitalize(activeFilter)} Todos</Text>
        <TouchableOpacity style={styles.button} onPress={showModal}>
            <Text style={styles.text}>Add</Text>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#81c04d',
        paddingTop: 30,
        paddingBottom: 10,
        flexDirection: 'row',
    },
    button: {
        width: 50,
    },
    text: {
        color: '#fff',
        textAlign: 'center',
    },
    title: {
        flex: 1,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
})

export default TitleBar
