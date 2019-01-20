/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { accounts as accountsDict } from '../../../constants/accounts'

export class AccountsList extends React.Component {
    keyExtractor = account => account.name

    renderItem = ({ item }) => {
        const { displayName } = accountsDict[item.name] || ''
        const { amount } = item
        const amountString = parseFloat(Math.round(amount * 100) / 100).toFixed(2)
        return (
            <TouchableOpacity
                style={styles.gridItem}
                onPress={() => this.props.showModal(displayName, amountString)}
            >
                <Text style={styles.cardTitle}>{displayName}</Text>
                <Text style={styles.cardAmount}>{amountString}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        console.log(this.props)
        return (
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <FlatList
                    style={{ flexDirection: 'column' }}
                    contentContainerStyle={styles.grid}
                    data={this.props.accounts}
                    keyExtractor={this.keyExtractor}
                    numColumns={2}
                    renderItem={this.renderItem}
                />
                <View style={styles.spacer} />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 5,
        elevation: 5,
        flex: 1,
        marginHorizontal: 5,
        alignItems: 'flex-start',
        height: 100,
    },
    cardAmount: {
        fontSize: 24,
        marginHorizontal: 8,
    },
    cardTitle: {
        color: 'rgb(126, 89, 191)',
        fontSize: 16,
        margin: 8,
        marginBottom: 0,
    },
    container: {
        flex: 1,
        paddingTop: 5,
        paddingBottom: 50,
        paddingHorizontal: 5,
        // flexDirection: 'row',
    },
    contentContainer: {
        // justifyContent: 'center',
    },
    grid: {
        // justifyContent: 'center',
        // flexDirection: 'row',
        // // flexWrap: 'wrap',
        // flex: 1,
    },
    gridItem: {
        margin: 5,
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        elevation: 3,
    },
    gridItemImage: {
        width: 100,
        height: 100,
        borderWidth: 1.5,
        borderColor: 'white',
        borderRadius: 50,
    },
    gridItemText: {
        marginTop: 5,
        textAlign: 'center',
    },
    logo: {
        flex: 1,
    },
    row: {
        height: 100,
        paddingVertical: 5,
    },
    spacer: {
        height: 100,
    },
})
