import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Caption, Button, RadioButton, Text, Title } from 'react-native-paper'

export class Picker extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.pickerGroup}>
                    {this.props.values.map(item => (
                        <Button
                            compact={false}
                            dark
                            mode={item.value === this.props.value ? 'contained' : 'outlined'}
                            onPress={() => this.props.onValueChange(item.value)}
                            key={item.value}
                            style={styles.picker}
                        >
                            {item.label}
                        </Button>
                    ))}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pickerGroup: {
        flexDirection: 'row',
        padding: 15,
    },
    picker: {
        elevation: 0,
    },
})
