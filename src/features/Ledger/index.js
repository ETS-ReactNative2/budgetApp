import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles'

class Ledger extends React.Component {
    renderRow() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, alignSelf: 'stretch' }}>
                    <Text>
                    hey
                    </Text>
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch' }}>
                    <Text>
                    hey
                    </Text>
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch' }}>
                    <Text>
                    hey
                    </Text>
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch' }}>
                    <Text>
                    hey
                    </Text>
                </View>
            </View>
        );
    }

    render() {
        const data = [1, 2, 3, 4, 5];
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {
                    data.map((datum) => { // This will render a row for each data element.
                    return this.renderRow();
                })
            }
            </View>
        );
    }
}

export default Ledger

