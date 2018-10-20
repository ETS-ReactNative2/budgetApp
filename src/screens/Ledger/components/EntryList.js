import React from 'react'
import { TouchableHighlight, StyleSheet, View, Text, ListView } from 'react-native'
import CompleteToggle from './complete-toggle'
import AddTodoRow from './add-todo-row'
import { VisibilityFilters } from '../actions/actionTypes'

class EntryList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2,
            }),
        }
        if (this.props.todos) {
            this.state.dataSource = this.state.dataSource.cloneWithRows(
                this.getTodosWithTemplate(this.props.todos),
            )
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.todos !== this.props.todos) {
            this.setState(prevState => ({
                dataSource: prevState.dataSource.cloneWithRows(
                    this.getTodosWithTemplate(nextProps.todos),
                ),
            }))
        }
    }

    // eslint-disable-next-line class-methods-use-this
    getTodosWithTemplate(todos) {
        return todos.concat([{ template: true }])
    }

    renderRow = todo => {
        if (todo.template) {
            return this.renderTodoItemTemplate()
        }
        return this.renderTodoItem(todo)
    }

    renderTodoItem(todo) {
        const { completeTodo, incompleteTodo } = this.props
        return (
            <TouchableHighlight
                underlayColor="#e4f2d9"
                key={todo.id}
                style={styles.row}
                onPress={() => {
                    if (todo.completed) {
                        incompleteTodo(todo.id)
                    } else {
                        completeTodo(todo.id)
                    }
                }}
            >
                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                    <CompleteToggle
                        style={styles.toggle}
                        checked={todo.completed}
                        onChecked={() => completeTodo(todo.id)}
                        onUnchecked={() => incompleteTodo(todo.id)}
                    />
                    <Text style={styles.dateText}>9/11</Text>
                    <Text style={styles.descriptionText}>{todo.name}</Text>
                    <Text style={styles.amountText}>$40.13</Text>
                </View>
            </TouchableHighlight>
        )
    }

    renderTodoItemTemplate() {
        const { addTodo, activeFilter } = this.props
        return (
            <AddTodoRow
                addTodo={name => addTodo(name, activeFilter === VisibilityFilters.COMPLETED)}
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
