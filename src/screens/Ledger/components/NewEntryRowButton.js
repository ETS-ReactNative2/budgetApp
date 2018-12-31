import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

class NewEntryRowButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            focused: false,
            value: null,
        }
    }

    onSubmit = () => {
        this.props.addLedgerEntry(this.state.value, true)
    }

    onText = text => {
        this.setState({
            value: text,
        })
    }

    onFocused = () => {
        this.setState({
            focused: true,
        })
    }

    onBlurred = () => {
        this.setState({
            focused: false,
        })
    }

    renderBorder() {
        if (this.state.focused) {
            return <View style={styles.border} />
        }
        return null
    }

    render() {
        return (
            <View style={styles.row}>
                <TextInput
                    style={styles.input}
                    onChangeText={this.onText}
                    onSubmitEditing={this.onSubmit}
                    onFocus={this.onFocused}
                    onBlur={this.onBlurred}
                    placeholder="Add a new transaction..."
                />
                {this.renderBorder()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'column',
        paddingLeft: 40,
        paddingRight: 10,
    },
    input: {
        height: 40,
        flex: 1,
    },
    border: {
        flex: 1,
        height: 1,
        background: 'gray',
    },
})

export default NewEntryRowButton
