/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export class AccountsList extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => this.props.showModal('Capital One Credit', '$34.15')}
                    >
                        <Text style={styles.cardTitle}>Capital One Credit</Text>
                        <Text style={styles.cardAmount}>{`$${'34.15'}`}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={this.props.showModal}>
                        <Text style={styles.cardTitle}>Capital One Long-Term</Text>
                        <Text style={styles.cardAmount}>{`$${'34.15'}`}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.card} onPress={this.props.showModal}>
                        <Text style={styles.cardTitle}>Capital One Short-Term</Text>
                        <Text style={styles.cardAmount}>{`$${'34.15'}`}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={this.props.showModal}>
                        <Text style={styles.cardTitle}>Capital One Utilities</Text>
                        <Text style={styles.cardAmount}>{`$${'34.15'}`}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.card} onPress={this.props.showModal}>
                        <Text style={styles.cardTitle}>Capital One Gifts</Text>
                        <Text style={styles.cardAmount}>{`$${'34.15'}`}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={this.props.showModal}>
                        <Text style={styles.cardTitle}>Capital One Extras</Text>
                        <Text style={styles.cardAmount}>{`$${'34.15'}`}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.card} onPress={this.props.showModal}>
                        <Text style={styles.cardTitle}>Capital One Vacation</Text>
                        <Text style={styles.cardAmount}>{`$${'34.15'}`}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={this.props.showModal}>
                        <Text style={styles.cardTitle}>Cash</Text>
                        <Text style={styles.cardAmount}>{`$${'34.15'}`}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.card} onPress={this.props.showModal}>
                        <Text style={styles.cardTitle}>Chase Credit</Text>
                        <Text style={styles.cardAmount}>{`$${'34.15'}`}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={this.props.showModal}>
                        <Text style={styles.cardTitle}>Citizens</Text>
                        <Text style={styles.cardAmount}>{`$${'34.15'}`}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.card} onPress={this.props.showModal}>
                        <Text style={styles.cardTitle}>Costco Credit</Text>
                        <Text style={styles.cardAmount}>{`$${'34.15'}`}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={this.props.showModal}>
                        <Text style={styles.cardTitle}>Expense</Text>
                        <Text style={styles.cardAmount}>{`$${'34.15'}`}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.card} onPress={this.props.showModal}>
                        <Text style={styles.cardTitle}>Synchrony</Text>
                        <Text style={styles.cardAmount}>{`$${'34.15'}`}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} onPress={this.props.showModal}>
                        <Text style={styles.cardTitle}>Vanguard</Text>
                        <Text style={styles.cardAmount}>{`$${'34.15'}`}</Text>
                    </TouchableOpacity>
                </View>
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
    },
    logo: {
        flex: 1,
    },
    row: {
        height: 100,
        flexDirection: 'row',
        paddingVertical: 5,
        justifyContent: 'center',
    },
    spacer: {
        height: 100,
    },
})
