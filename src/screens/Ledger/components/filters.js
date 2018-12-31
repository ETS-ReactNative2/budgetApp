// Unused code currently. Left here for reference.

import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'
import { VisibilityFilters } from '../actions/actionTypes'

function capitalize(word) {
    const lower = word.toLowerCase()
    return lower.slice(0, 1).toUpperCase() + lower.slice(1)
}

class Filters extends React.Component {
    renderFilters() {
        const { showAll, showCompleted, showIncomplete, activeFilter } = this.props
        return [
            { name: VisibilityFilters.ALL, action: showAll },
            { name: VisibilityFilters.COMPLETED, action: showCompleted },
            { name: VisibilityFilters.INCOMPLETE, action: showIncomplete },
        ].map(filter => {
            const style = [styles.button]
            if (activeFilter === filter.name) {
                style.push(styles.current)
            }
            return (
                <TouchableOpacity key={filter.name} style={style} onPress={filter.action}>
                    <Text style={styles.text}>{capitalize(filter.name)}</Text>
                </TouchableOpacity>
            )
        })
    }

    render() {
        return <View style={styles.bar}>{this.renderFilters()}</View>
    }
}

const styles = StyleSheet.create({
    bar: {
        background: '#81c04d',
        flexDirection: 'row',
    },
    button: {
        paddingTop: 20,
        paddingBottom: 20,
        flex: 1,
    },
    text: {
        flex: 1,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    current: {
        background: '#70a743',
    },
})

export default Filters
