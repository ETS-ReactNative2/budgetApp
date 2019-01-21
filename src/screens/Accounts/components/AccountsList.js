/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { accounts as accountsDict, filteredAccounts } from '../../../constants/accounts'

export class AccountsList extends React.Component {
    keyExtractor = account => account.name

    renderItem = ({ item }) => {
        const { displayName } = accountsDict[item.name] || ''
        const { amount } = item
        const amountString = parseFloat(Math.round(amount * 100) / 100).toFixed(2)
        return (
            <TouchableOpacity
                style={styles.card}
                onPress={() => this.props.showModal(displayName, amountString)}
            >
                <Text style={styles.cardTitle}>{displayName}</Text>
                <Text style={styles.cardAmount}>${amountString}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.accounts.filter(
                        account => !filteredAccounts.includes(account.name),
                    )}
                    keyExtractor={this.keyExtractor}
                    numColumns={2}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
        paddingTop: 5,
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 5,
        elevation: 5,
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 5,
        marginVertical: 5,
        alignItems: 'flex-start',
        height: 100,
        width: 200,
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
})
