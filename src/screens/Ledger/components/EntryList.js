import React from 'react'
import { TouchableHighlight, StyleSheet, View, Text, FlatList } from 'react-native'
import CompleteToggle from './CompleteToggle'
import { categories } from '../../../constants/categories'

class EntryList extends React.Component {
    constructor(props) {
        super(props)
        this.handleCirclePress = this.handleCirclePress.bind(this)
    }

    handleCirclePress(description, guid) {
        this.props.deleteTodo(description, guid)
    }

    renderItem = ({ item }) => {
        const { completeTodo, incompleteTodo } = this.props
        const backgroundColor = `${categories[item.category].color}11`
        return (
            <TouchableHighlight
                underlayColor="#e4f2d9"
                key={item.guid}
                style={Object.assign({}, { backgroundColor }, styles.row)}
                onPress={() => {
                    if (item.completed) {
                        incompleteTodo(item.guid)
                    } else {
                        completeTodo(item.guid)
                    }
                }}
            >
                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                    <CompleteToggle
                        style={styles.toggle}
                        category={item.category}
                        checked={item.completed}
                        description={item.description}
                        guid={item.guid}
                        onPress={this.handleCirclePress}
                    />
                    <Text style={styles.dateText}>{item.date.substring(0, 5)}</Text>
                    <Text style={styles.descriptionText}>{item.description}</Text>
                    <Text style={styles.amountText}>
                        <Text style={{ color: '#ccc' }}>$ </Text>
                        {item.amount}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.ledgerEntries}
                    keyExtractor={item => item.guid}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 12,
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
        color: '#999',
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
