import React from 'react'
import { Picker, StyleSheet, TouchableOpacity, View } from 'react-native'
import DatePicker from 'react-native-datepicker'
import { Button, Text, TextInput } from 'react-native-paper'

const getDate = () => {
    const today = new Date()
    const dd = today.getDate()
    const mm = today.getMonth() + 1 // January is 0!
    const yyyy = today.getFullYear()
    return `${yyyy}-${mm}/${dd}`
}

class AddLedgerEntry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: null,
            category: 'uncategorized',
            date: getDate().slice(5),
            description: null,
            moneySource: 'capitalOneCredit',
            moneyDestination: 'expense',
        }
    }

    handleOnAmountChange = amount => {
        this.setState({ amount })
    }

    handleOnDateChange = date => {
        this.setState({ date })
    }

    handleOnDescriptionChange = descriptionText => {
        this.setState({ description: descriptionText })
    }

    addLedgerEntry = () => {
        this.props.addLedgerEntry(
            this.state.description,
            true,
            // amount: this.packageAmount(),
        )
        this.props.hideModal()
        this.setState({
            amount: null,
            category: 'uncategorized',
            date: getDate().slice(5),
            description: null,
            moneySource: 'capitalOneCredit',
            moneyDestination: 'expense',
        })
    }

    render() {
        const { hideModal } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.toolbar}>
                    <Text style={styles.toolbarButton} />
                    <Text style={styles.toolbarTitle}>Add Ledger Entry</Text>
                    <TouchableOpacity style={styles.toolbarButton} onPress={hideModal}>
                        <Text style={styles.toolbarText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <DatePicker
                        style={styles.datePicker}
                        date={this.state.date}
                        mode="date"
                        placeholder="date"
                        format="M/D"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={
                            {
                                // ... You can check the source to find the other keys.
                            }
                        }
                        onDateChange={date => this.handleOnDateChange(date)}
                    />
                    <View style={styles.fromToContainer}>
                        <Text style={styles.fromToText}>From</Text>
                        <Picker
                            prompt="Money comes from:"
                            selectedValue={this.state.moneySource}
                            style={styles.from}
                            onValueChange={itemValue => this.setState({ moneySource: itemValue })}
                        >
                            <Picker.Item label="Allegent" value="allegent" />
                            <Picker.Item label="Capital One Credit" value="capitalOneCredit" />
                            <Picker.Item label="Cash" value="cash" />
                            <Picker.Item label="Citizens" value="citizens" />
                            <Picker.Item label="Gift" value="gift" />
                            <Picker.Item label="Library" value="library" />
                            <Picker.Item label="Niche" value="niche" />
                            <Picker.Item label="Sale" value="sale" />
                            <Picker.Item label="Synchrony" value="synchrony" />
                            <Picker.Item label="Other" value="other" />
                        </Picker>
                        <Text style={styles.fromToText}>To</Text>
                        <Picker
                            prompt="Money goes to:"
                            selectedValue={this.state.moneyDestination}
                            style={styles.to}
                            onValueChange={itemValue =>
                                this.setState({ moneyDestination: itemValue })
                            }
                        >
                            <Picker.Item label="Allegent" value="allegent" />
                            <Picker.Item label="Capital One Credit" value="capitalOneCredit" />
                            <Picker.Item label="Cash" value="cash" />
                            <Picker.Item label="Citizens" value="citizens" />
                            <Picker.Item label="Expense" value="expense" />
                            <Picker.Item label="Synchrony" value="synchrony" />
                            <Picker.Item label="Vanguard" value="vanguard" />
                            <Picker.Item label="Other" value="other" />
                        </Picker>
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
                    <View style={styles.categoryContainer}>
                        <Text style={styles.fromToText}>Category: </Text>
                        <Picker
                            itemStyle={styles.pickerItem}
                            prompt="Category"
                            style={styles.category}
                            selectedValue={this.state.category}
                            onValueChange={itemValue => this.setState({ category: itemValue })}
                        >
                            <Picker.Item label="Babysitting" value="babysitting" />
                            <Picker.Item label="Car Costs" value="carCosts" />
                            <Picker.Item label="Cell Phone" value="cellPhone" />
                            <Picker.Item label="Clothes" value="clothes" />
                            <Picker.Item label="Eating Out" value="eatingOut" />
                            <Picker.Item label="Electricity" value="electricity" />
                            <Picker.Item label="Entertainment" value="entertainment" />
                            <Picker.Item label="Fixed Bills" value="fixedBills" />
                            <Picker.Item label="Food Groceries" value="foodGroceries" />
                            <Picker.Item label="Gas" value="gas" />
                            <Picker.Item label="Gifts" value="gifts" />
                            <Picker.Item label="Heating gas" value="heatingGas" />
                            <Picker.Item label="Household Goods" value="householdGoods" />
                            <Picker.Item label="Kids Things" value="kidsThings" />
                            <Picker.Item label="Loan" value="loan" />
                            <Picker.Item label="Mortgage" value="mortgage" />
                            <Picker.Item label="Non-Essential Items" value="nonEssentialItems" />
                            <Picker.Item label="OSLA" value="osla" />
                            <Picker.Item label="Pet Costs" value="petCosts" />
                            <Picker.Item label="Preschool" value="preschool" />
                            <Picker.Item label="Retirement" value="retirement" />
                            <Picker.Item label="Savings" value="savings" />
                            <Picker.Item label="Small Misc Expenses" value="smallMiscExpenses" />
                            <Picker.Item label="Travel" value="travel" />
                            <Picker.Item label="Uncategorized" value="uncategorized" />
                            <Picker.Item label="Water Bill" value="waterBill" />
                        </Picker>
                    </View>
                    <Button mode="contained" dark onPress={this.addLedgerEntry}>
                        Add Ledger Entry
                    </Button>
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
        marginBottom: 7,
    },
    amountInputDollarSign: {
        fontSize: 24,
        paddingRight: 10,
        flex: 1,
    },
    category: {
        color: 'blue',
        flex: 1,
        marginVertical: 5,
    },
    categoryContainer: {
        alignItems: 'center',
        borderColor: 'gray',
        borderRadius: 2,
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 13,
        paddingLeft: 10,
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
    datePicker: {
        width: 100,
        marginBottom: 13,
    },
    descriptionInput: {
        marginBottom: 10,
    },
    from: {
        color: 'red',
        flex: 1,
        marginVertical: 5,
    },
    fromToContainer: {
        alignItems: 'center',
        borderColor: 'gray',
        borderRadius: 2,
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingLeft: 10,
    },
    fromToText: {
        padding: 5,
    },
    pickerItem: {
        marginLeft: 10,
    },
    to: {
        color: 'green',
        flex: 1,
        marginVertical: 5,
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

export default AddLedgerEntry
