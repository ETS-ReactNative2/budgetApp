import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'

const EditMonthTargetButton = ({ showModal }) => (
    <View
        style={{
            marginHorizontal: 15,
        }}
    >
        <Button onPress={showModal} mode="outlined" compact>
            Adjust target or current
        </Button>
    </View>
)

export default EditMonthTargetButton
