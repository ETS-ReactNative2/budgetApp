import React from 'react'
import { Picker, StyleSheet, TouchableOpacity, View } from 'react-native'
import DatePicker from 'react-native-datepicker'
import { Button, Text } from 'react-native-paper'
import { compose } from 'redux'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'
import makeInputGreatAgain, {
    withNextInputAutoFocusForm,
    withNextInputAutoFocusInput,
} from 'react-native-formik'
import MaterialTextInput from '../../../components/MaterialTextInput'

const FormTextInput = compose(
    makeInputGreatAgain,
    withNextInputAutoFocusInput,
)(MaterialTextInput)
const Form = withNextInputAutoFocusForm(View)

const validationSchema = Yup.object().shape({
    amount: Yup.number().required('Please enter an amount'),
})

const getDate = () => {
    const today = new Date()
    const dd = today.getDate()
    const mm = today.getMonth() + 1 // January is 0!
    const yyyy = today.getFullYear()
    return `${mm}/${dd} ${yyyy}`
}

class AddLedgerEntry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: null,
            category: 'uncategorized',
            date: getDate(),
            description: '',
            moneySource: 'capitalOneCredit',
            moneyDestination: 'expense',
        }
    }

    handleOnAmountChange = amount => {
        this.setState({ amount })
    }

    handleOnDateChange = date => {
        console.warn(date)
        this.setState({ date })
    }

    handleOnDescriptionChange = descriptionText => {
        this.setState({ description: descriptionText })
    }

    addLedgerEntry = () => {
        this.props.addLedgerEntry(
            {
                amount: this.state.amount,
                category: this.state.category,
                date: this.state.date,
                description: this.state.description,
                moneyDestination: this.state.moneyDestination,
                moneySource: this.state.moneySource,
            },
            true,
        )
        this.props.hideModal()
        this.setState({
            amount: null,
            category: 'uncategorized',
            date: getDate(),
            description: null,
            moneyDestination: 'expense',
            moneySource: 'capitalOneCredit',
        })
    }

    render() {
        const { hideModal } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.toolbar}>
                    <View style={styles.toolbarButton}>
                        <DatePicker
                            style={styles.datePicker}
                            date={this.state.date}
                            mode="date"
                            placeholder="date"
                            format="MM/DD YYYY"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateInput: {
                                    flex: 1,
                                    height: 50,
                                    borderWidth: 0,
                                    borderColor: '#aaa',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    marginLeft: 15,
                                },
                                dateText: {
                                    color: 'white',
                                },
                                dateTouchBody: {
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                },
                            }}
                            showIcon
                            onDateChange={date => this.handleOnDateChange(date)}
                        />
                    </View>
                    <Text style={styles.toolbarTitle}>Add Ledger Entry</Text>
                    <TouchableOpacity style={styles.toolbarButton} onPress={hideModal}>
                        <Text style={styles.toolbarText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
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
                    <Formik
                        onSubmit={values => {
                            console.log(values)
                            // this.addLedgerEntry
                        }}
                        validationSchema={validationSchema}
                        render={props => (
                            <Form>
                                <FormTextInput label="Email" name="email" type="email" />
                                <FormTextInput label="Password" name="password" type="password" />
                                <FormTextInput label="First Name" name="firstName" type="name" />
                                <FormTextInput label="Last Name" name="lastName" type="name" />
                                <Button mode="contained" dark onPress={props.handleSubmit}>
                                    Add Ledger Entry
                                </Button>
                                <Button onPress={props.handleSubmit} title="SUBMIT" />
                            </Form>
                        )}
                    />
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
        marginBottom: 14,
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
        borderWidth: 0,
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
        color: 'red',
    },
    to: {
        color: 'green',
        flex: 1,
        marginVertical: 5,
    },
    toolbar: {
        backgroundColor: '#81c04d',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
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
