import React from 'react'
import { TouchableHighlight, StyleSheet, View, Text, FlatList } from 'react-native'
import CompleteToggle from './CompleteToggle'
import { VisibilityFilters } from '../actions/actionTypes'

class EntryList extends React.Component {
    constructor(props) {
        super(props)
    }

    renderItem = ({ item }) => {
        const { completeTodo, incompleteTodo } = this.props
        return (
            <TouchableHighlight
                underlayColor="#e4f2d9"
                key={item.id}
                style={styles.row}
                onPress={() => {
                    if (item.completed) {
                        incompleteTodo(item.id)
                    } else {
                        completeTodo(item.id)
                    }
                }}
            >
                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                    <CompleteToggle
                        style={styles.toggle}
                        checked={item.completed}
                        onChecked={() => completeTodo(item.id)}
                        onUnchecked={() => incompleteTodo(item.id)}
                    />
                    <Text style={styles.dateText}>{item.date.substring(0, 5)}</Text>
                    <Text style={styles.descriptionText}>{item.description}</Text>
                    <Text style={styles.amountText}>${item.amount}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.ledgerEntries}
                    keyExtractor={item => item.id}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    row: {
        flexDirection: 'row',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
    },
    templateRow: {
        paddingLeft: 30,
    },
    amountText: {
        fontSize: 15,
        textAlign: 'right',
        width: 80,
    },
    dateText: {
        fontSize: 15,
        paddingLeft: 15,
        width: 60,
    },
    descriptionText: {
        flex: 1,
        fontSize: 15,
        paddingLeft: 10,
    },
})

export default EntryList
