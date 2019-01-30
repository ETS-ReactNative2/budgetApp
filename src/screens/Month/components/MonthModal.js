import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import makeInput, {
    withNextInputAutoFocusForm,
    withNextInputAutoFocusInput,
} from 'react-native-formik'
import { Button, Text, TextInput } from 'react-native-paper'
import { compose } from 'redux'
import { Formik } from 'formik'
import * as Yup from 'yup'

const FormTextInput = compose(
    makeInput,
    withNextInputAutoFocusInput,
)(TextInput)

const Form = withNextInputAutoFocusForm(View)

const validationSchema = Yup.object().shape({
    monthTarget: Yup.number()
        .typeError('Please enter a number')
        .required('Please enter an amount'),
})

class MonthModal extends React.Component {
    editMonthTarget = ({ monthTarget }) => {
        this.props.editMonthTarget({
            monthTarget,
        })
        this.props.hideModal()
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.toolbar}>
                    <Text style={styles.toolbarTitle}>Update Amount</Text>
                    <TouchableOpacity style={styles.toolbarButton} onPress={this.props.hideModal}>
                        <Text style={styles.toolbarText}>Cancel</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.content}>
                    <Text style={{ fontSize: 16, color: 'rgb(126, 89, 191)' }}>Month</Text>
                    <Text style={{ fontSize: 14, color: 'rgb(175, 175, 175)' }}>
                        This is your target:
                    </Text>
                    <Text style={{ fontSize: 18, color: 'rgb(126, 126, 126)' }}>
                        {this.props.monthTarget}
                    </Text>
                    <Formik
                        onSubmit={this.editMonthTarget}
                        validateOnBlur
                        validationSchema={validationSchema}
                        render={props => (
                            <Form>
                                <View style={styles.buttonRow}>
                                    <View style={styles.amountInputContainer}>
                                        <FormTextInput
                                            error={props.errors && props.errors.length}
                                            keyboardType="numeric"
                                            label="New Amount"
                                            mode="flat"
                                            name="monthTarget"
                                            placeholder="$"
                                            style={styles.amountInput}
                                            type="monthTarget"
                                        />
                                    </View>
                                    <View style={styles.buttonContainer}>
                                        <Button
                                            dark
                                            mode="contained"
                                            onPress={props.handleSubmit}
                                            style={styles.button}
                                        >
                                            Update
                                        </Button>
                                    </View>
                                </View>
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
        color: '#fff',
        textAlign: 'left',
        fontWeight: 'bold',
    },
})

export default MonthModal
