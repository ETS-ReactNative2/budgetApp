import React from 'react'
import { Provider } from 'react-redux'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import store from './src/store'
import Navigation from './src/navigation'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  }
}

class App extends React.Component {
  static router = Navigation.router;

  render() {
    return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <Navigation
            navigation={ this.props.navigation }
          />
        </PaperProvider>
      </Provider>
    )
  }
}

export default App
