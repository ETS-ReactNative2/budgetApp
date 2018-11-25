import React from 'react'
import { Provider } from 'react-redux'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/store'
import Navigation from './src/navigation'

const theme = {
    ...DefaultTheme,
    roundness: 0,
    colors: {
        ...DefaultTheme.colors,

        accent: '#f1c40f',
        background: '#fff',
        primary: 'rgb(126, 89, 191)',
        text: '#666',
    },
}

class App extends React.Component {
    static router = Navigation.router

    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <PaperProvider theme={theme}>
                        <Navigation navigation={this.props.navigation} />
                    </PaperProvider>
                </PersistGate>
            </Provider>
        )
    }
}

export default App
