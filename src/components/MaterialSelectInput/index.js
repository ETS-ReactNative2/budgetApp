import React from 'react'
import { Picker, View } from 'react-native'
import { TextField } from 'react-native-material-textfield'

export default class MaterialTextInput extends React.PureComponent {
    // Your custom input needs a focus function for `withNextInputAutoFocus` to work
    focus() {
        this.input.focus()
    }

    render() {
        return (
            <View>
                {' '}
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
                <Field
                    component="select"
                    name={this.props.name}
                    ref={input => (this.input = input)}
                >
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </Field>
            </View>
        )
    }
}
