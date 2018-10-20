import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import DateColumn from '../DateColumn'
import Description from '../Description'

const Ledger = ({ entry }) => (
    <View style={styles.row}>
        <DateColumn date={entry.date} />
        <Description description={entry.description} />
    </View>
)

export default Ledger
