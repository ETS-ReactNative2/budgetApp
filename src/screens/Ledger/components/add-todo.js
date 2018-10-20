import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Button, Switch, Text, TextInput } from 'react-native-paper'

class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: null,
            description: null,
            expenseSwitch: true,
        }
    }

    handleOnAmountChange = amount => {
        this.setState({ amount })
    }

    handleOnDescriptionChange = descriptionText => {
        this.setState({ description: descriptionText })
    }

    addTodo = () => {
        this.props.addTodo(
            this.state.description,
            true,
            // amount: this.packageAmount(),
        )
        this.props.hideModal()
        this.setState({
            amount: null,
            description: null,
            expenseSwitch: true,
        })
    }

    packageAmount = () => {
        if (this.state.expenseSwitch === true) return this.state.amount * -1
        return this.state.amount
    }

    render() {
        const { hideModal } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.toolbar}>
                    <Text style={styles.toolbarButton} />
                    <Text style={styles.toolbarTitle}>Add Todo</Text>
                    <TouchableOpacity style={styles.toolbarButton} onPress={hideModal}>
                        <Text style={styles.toolbarText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <View style={styles.expenseSwitchContainer}>
                        <Switch
                            color="red"
                            onValueChange={value => this.setState({ expenseSwitch: value })}
                            value={this.state.expenseSwitch}
                        />
                    </View>
                    <TextInput
                        mode="outlined"
                        placeholder="Describe your transaction"
                        style={styles.descriptionInput}
                        onChangeText={this.handleOnDescriptionChange}
                        value={this.state.description}
                    />
                    <View style={styles.amountInputContainer}>
                        <Text style={styles.amountInputDollarSign}>$</Text>
                        <TextInput
                            keyboardType="numeric"
                            mode="outlined"
                            placeholder="Amount"
                            style={styles.amountInput}
                            onChangeText={this.handleOnAmountChange}
                            value={this.state.amount}
                        />
                    </View>
                    <Button onPress={this.addTodo}>Add Expense</Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    amountInput: {
        flex: 12,
        marginBottom: 10,
    },
    amountInputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    amountInputDollarSign: {
        fontSize: 24,
        paddingRight: 10,
        flex: 1,
    },
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    descriptionInput: {
        marginBottom: 10,
    },
    expenseSwitchContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 10,
    },
    toolbar: {
        backgroundColor: '#81c04d',
        paddingTop: 30,
        paddingBottom: 10,
        flexDirection: 'row',
    },
    toolbarButton: {
        width: 50,
    },
    toolbarText: {
        color: '#fff',
        textAlign: 'center',
    },
    toolbarTitle: {
        flex: 1,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
})

export default AddTodo
