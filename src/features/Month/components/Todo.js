import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
    <View
        onClick={onClick}
    >
        <Text style={{ textDecorationLine: completed ? 'line-through' : 'none' }}>
            {text}
        </Text>
    </View>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo
