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
    monthCurrent: Yup.number()
        .typeError('Please enter a number')
        .required('Please enter an amount'),
})

class MonthModal extends React.Component {
    editMonthTarget = ({ monthTarget, monthCurrent }) => {
        this.props.editMonthTarget({
            monthTarget,
        })
        this.props.editMonthCurrent({
            monthCurrent,
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
                    <Formik
                        initialValues={{
                            monthTarget: this.props.monthTarget.toString(),
                            monthCurrent: this.props.monthCurrent.toString(),
                        }}
                        onSubmit={this.editMonthTarget}
                        validateOnBlur
                        validationSchema={validationSchema}
                        render={props => (
                            <Form>
                                <FormTextInput
                                    error={props.errors && props.errors.length}
                                    keyboardType="numeric"
                                    label="Current spending target"
                                    mode="flat"
                                    name="monthTarget"
                                    value={props.values.monthTarget}
                                    style={styles.textInput}
                                />
                                {props.errors &&
                                    props.errors.monthTarget &&
                                    props.touched.monthTarget && (
                                        <Text style={styles.errorText}>
                                            {props.errors.monthTarget}
                                        </Text>
                                    )}
                                <FormTextInput
                                    error={props.errors && props.errors.length}
                                    keyboardType="numeric"
                                    label="Amount remaining on the target"
                                    mode="flat"
                                    name="monthCurrent"
                                    value={props.values.monthCurrent}
                                    style={styles.textInput}
                                />
                                {props.errors &&
                                    props.errors.monthCurrent &&
                                    props.touched.monthCurrent && (
                                        <Text style={styles.errorText}>
                                            {props.errors.monthCurrent}
                                        </Text>
                                    )}
                                <Button dark mode="contained" onPress={props.handleSubmit}>
                                    Update
                                </Button>
                            </Form>
                        )}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    amountInputContainer: {
        // alignItems: 'flex-start',
        // flex: 2,
        // flexDirection: 'row',
        // justifyContent: 'flex-start',
        // marginTop: 10,
        borderWidth: 1,
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
        marginBottom: 15,
    },
    textInput: {
        marginBottom: 15,
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
