import React from 'react'
import { View, Text } from 'react-native'
import { categories } from '../../../constants/categories'

export const BarChartBar = ({ value, name, color, width }) => {
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ color, fontSize: 11 }}>
                {categories[name].displayName} {value}
            </Text>
            <View
                style={{
                    backgroundColor: color,
                    height: 25,
                    width,
                }}
            />
        </View>
    )
}
