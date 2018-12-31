import React from 'react'
import { Picker, StyleSheet, TouchableOpacity, View } from 'react-native'
import DatePicker from 'react-native-datepicker'
import makeInput, {
    keyboardModal,
    withPickerValues,
    withNextInputAutoFocusForm,
    withNextInputAutoFocusInput,
} from 'react-native-formik'
import { Button, Text, TextInput } from 'react-native-paper'
import { compose } from 'redux'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'
import MaterialTextInput from '../../../components/MaterialTextInput'

const FormTextInput = compose(
    makeInput,
    withNextInputAutoFocusInput,
)(TextInput)

const Form = withNextInputAutoFocusForm(View)

const validationSchema = Yup.object().shape({
    amount: Yup.number()
        .typeError('Please enter a number')
        .required('Please enter an amount'),
})

class AccountsModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            account: 'capitalOneCredit',
            amount: 12.12,
        }
    }

    editAccount = (account, amount) => {
        this.props.editAccount({
            account,
            amount,
        })
        this.props.hideModal()
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.toolbar}>
                    <Text style={styles.toolbarTitle}>{`Edit ${this.props.account}`}</Text>
                    <TouchableOpacity style={styles.toolbarButton} onPress={this.props.hideModal}>
                        <Text style={styles.toolbarText}>Cancel</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.content}>
                    <Formik
                        initialValues={{
                            amount: this.props.amount,
                        }}
                        onSubmit={values => {
                            this.editAccount(values)
                        }}
                        validateOnBlur
                        validationSchema={validationSchema}
                        render={props => (
                            <Form>
                                <View style={styles.amountInputContainer}>
                                    <FormTextInput
                                        error={props.errors && props.errors.length}
                                        keyboardType="numeric"
                                        label="Amount"
                                        mode="flat"
                                        name="amount"
                                        onChangeText={this.handleOnAmountChange}
                                        placeholder="$"
                                        style={styles.amountInput}
                                        type="amount"
                                    />
                                </View>
                                <Button
                                    dark
                                    mode="contained"
                                    onPress={props.handleSubmit}
                                    style={styles.button}
                                >
                                    Add Entry
                                </Button>
                                {props.errors && props.errors.amount && props.touched.amount && (
                                    <Text style={styles.errorText}>{props.errors.amount}</Text>
                                )}
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
        flex: 1,
        marginRight: 10,
    },
    amountInputContainer: {
        alignItems: 'flex-start',
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 10,
    },
    amountInputDollarSign: {
        alignSelf: 'flex-end',
        color: '#1976D2',
        fontSize: 20,
        paddingBottom: 5,
        width: 20,
    },
    button: {
        alignSelf: 'stretch',
        borderRadius: 6,
        elevation: 2,
        flex: 1,
        justifyContent: 'center',
        marginTop: 15,
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'stretch',
    },
    buttonRow: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container: {
        backgroundColor: '#fafafa',
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    errorText: {
        color: 'red',
    },
    toolbar: {
        backgroundColor: 'rgb(126, 89, 191)',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
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
        color: 'rgb(126, 89, 191)',
        textAlign: 'center',
        fontWeight: 'bold',
    },
})

export default AccountsModal
