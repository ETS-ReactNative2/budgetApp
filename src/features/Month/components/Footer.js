import React from 'react'
import { View, Text } from 'react-native'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
    <View>
    <Text style={{marginLeft: 14, marginTop: 3}}>Show: </Text>
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 10,
        marginTop: 3

    }}>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
            All
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
            Active
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
            Completed
        </FilterLink>
    </View>
    </View>
)

export default Footer
