import React from 'react'
import { View } from 'react-native'
import Button from '../../../components/Button'

const EditMonthTargetButton = ({ showModal }) => (
    <View
        style={{
            margin: 15,
        }}
    >
        <Button label="Adjust target or current" onPress={showModal} raised />
    </View>
)

export default EditMonthTargetButton
