import React from 'react'
import { Provider } from 'react-redux'
import store from '../../../store'
import TodoApp from './todoApp'

const App = () => (
    <Provider store={store}>
        <TodoApp />
    </Provider>
)

export default App
