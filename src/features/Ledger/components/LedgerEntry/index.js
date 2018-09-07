import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles'
import DateColumn from '../DateColumn'
import Description from '../Description'

class Ledger extends React.Component {
    render() {
        return (
            <View style={styles.row}>
                <DateColumn date={this.props.entry.date} />
                <Description description={this.props.entry.description}/>
            </View>
        );
    }
}

export default Ledger
