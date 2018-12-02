import React from 'react'
import { Alert, TouchableHighlight, StyleSheet, View, Text, FlatList } from 'react-native'
import { Card } from 'react-native-paper'

export class Accounts extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>asdad</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    // row: {
    //     flexDirection: 'row',
    //     paddingTop: 8,
    //     paddingBottom: 8,
    //     paddingLeft: 20,
    //     paddingRight: 20,
    //     justifyContent: 'center',
    // },
})
