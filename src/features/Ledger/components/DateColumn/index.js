import React from 'react';
import {Text, View} from 'react-native';
import DatePicker from 'react-native-datepicker'

class DateColumn extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <View style={{flex: 1}} onPress={this.props.onDatePress}>
                <DatePicker
                    style={{width: 50}}
                    date={this.props.date}
                    mode="date"
                    placeholder={'date'}
                    format="M/D"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                        display: 'none',
                      },
                      dateInput: {
                        marginLeft: 0
                      }
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {}}
                /> 
            </View>
        );
    }
}

export default DateColumn

