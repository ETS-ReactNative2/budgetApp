import React from 'react'
import { Alert, StyleSheet, View, Modal } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as todoActions from '../actions/todoActions'
import * as ledgerModalVisibilityActions from '../actions/ledgerModalVisibilityActions'
import { VisibilityFilters } from '../actions/actionTypes'
import NewEntryButton from '../components/NewEntryButton'
import EntryList from '../components/EntryList'
import AddTodo from '../components/add-todo'

import store from '../../../store'

@connect(state => ({
    todos: state.todos.filter(todo => {
        if (state.filter === VisibilityFilters.ALL) {
            return true
        }
        if (state.filter === VisibilityFilters.COMPLETED) {
            return todo.completed
        }
        if (state.filter === VisibilityFilters.INCOMPLETE) {
            return !todo.completed
        }
        return true
    }),
    filter: state.filter,
    ledgerModalVisible: state.addModal.visible,
}))
class LedgerContainer extends React.Component {
    handleCloseModal = () => {
        Alert.alert(
            'Back Button Pressed',
            'Discard changes?',
            [
                { text: 'Cancel', onPress: () => {}, style: 'cancel' },
                {
                    text: 'OK',
                    onPress: () => store.dispatch(ledgerModalVisibilityActions.hideModal()),
                },
            ],
            { cancelable: false },
        )
    }

    render() {
        const { todos, filter, dispatch, ledgerModalVisible } = this.props
        return (
            <View style={styles.container}>
                <NewEntryButton {...bindActionCreators(ledgerModalVisibilityActions, dispatch)} />
                <EntryList
                    activeFilter={filter}
                    todos={todos}
                    {...bindActionCreators(todoActions, dispatch)}
                />
                {
                    // <Filters
                    //     activeFilter={filter}
                    //     {...bindActionCreators(visibilityActions, dispatch)}
                    // />
                }
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={ledgerModalVisible}
                    onRequestClose={this.handleCloseModal}
                >
                    <AddTodo
                        {...bindActionCreators(todoActions, dispatch)}
                        {...bindActionCreators(ledgerModalVisibilityActions, dispatch)}
                    />
                </Modal>
            </View>
        )
    }
}

/*
<AddTodo
style={styles.add}
{...bindActionCreators(todoActions, dispatch)} />
 */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {},
    list: {
        flex: 1,
    },
    add: {
        flex: 1,
    },
})

export default LedgerContainer
