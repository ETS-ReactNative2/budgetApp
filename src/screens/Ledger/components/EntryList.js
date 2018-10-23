import React from 'react'
import { TouchableHighlight, StyleSheet, View, Text, ListView } from 'react-native'
import CompleteToggle from './CompleteToggle'
import NewEntryRowButton from './NewEntryRowButton'
import { VisibilityFilters } from '../actions/actionTypes'

class EntryList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2,
            }),
        }
        if (this.props.ledgerEntries) {
            this.state.dataSource = this.state.dataSource.cloneWithRows(
                this.getLedgerEntriesWithTemplate(this.props.ledgerEntries),
            )
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.ledgerEntries !== this.props.ledgerEntries) {
            this.setState(prevState => ({
                dataSource: prevState.dataSource.cloneWithRows(
                    this.getLedgerEntriesWithTemplate(nextProps.ledgerEntries),
                ),
            }))
        }
    }

    // eslint-disable-next-line class-methods-use-this
    getLedgerEntriesWithTemplate(ledgerEntries) {
        return ledgerEntries.concat([{ template: true }])
    }

    renderRow = entry => {
        if (entry.template) {
            return this.renderLedgerEntryTemplate()
        }
        return this.renderLedgerEntry(entry)
    }

    renderLedgerEntry(entry) {
        const { completeTodo, incompleteTodo } = this.props
        return (
            <TouchableHighlight
                underlayColor="#e4f2d9"
                key={entry.id}
                style={styles.row}
                onPress={() => {
                    if (entry.completed) {
                        incompleteTodo(entry.id)
                    } else {
                        completeTodo(entry.id)
                    }
                }}
            >
                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                    <CompleteToggle
                        style={styles.toggle}
                        checked={entry.completed}
                        onChecked={() => completeTodo(entry.id)}
                        onUnchecked={() => incompleteTodo(entry.id)}
                    />
                    <Text style={styles.dateText}>{entry.date}</Text>
                    <Text style={styles.descriptionText}>{entry.description}</Text>
                    <Text style={styles.amountText}>{entry.amount}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    renderLedgerEntryTemplate() {
        const { addLedgerEntry, activeFilter } = this.props
        return (
            <NewEntryRowButton
                addLedgerEntry={description =>
                    addLedgerEntry(description, activeFilter === VisibilityFilters.COMPLETED)
                }
            />
        )
    }

    render() {
        return <ListView dataSource={this.state.dataSource} renderRow={this.renderRow} />
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
    },
    templateRow: {
        paddingLeft: 30,
    },
    amountText: {
        fontSize: 16,
        textAlign: 'right',
        width: 80,
    },
    dateText: {
        fontSize: 16,
        paddingLeft: 15,
        width: 60,
    },
    descriptionText: {
        flex: 1,
        fontSize: 16,
        paddingLeft: 10,
    },
})

export default EntryList
