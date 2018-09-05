import React from 'react';
import {
  Platform,
  Image,
  View,
  Text,
  AsyncStorage,
  BackHandler,
  StyleSheet,
} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Ledger from './src/features/Ledger'

class MonthScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Month!</Text>
      </View>
    );
  }
}

class AccountsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Accounts!</Text>
      </View>
    );
  }
}

class LedgerScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Ledger!</Text>
      </View>
    );
  }
}


class AnalysisScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Analysis!</Text>
      </View>
    );
  }
}

const MyNavigator = createMaterialTopTabNavigator(
  {
    MONTH: MonthScreen,
    ACCOUNTS: AccountsScreen,
    LEDGER: Ledger,
    ANALYSIS: AnalysisScreen,
  },
  {
    navigationOptions: ({ navigation, screenProps }) => ({
      header: null,
      headerMode: 'none',
      tabBarVisible: true,
      tabBarLabel: () => {
        const { routeName } = navigation.state;
        switch (routeName) {
          //
        }
        return <Text>{routeName}</Text>;
      },
    }),
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: 'rgb(12,157,197)',
      inactiveTintColor: 'black',
      indicatorStyle: {
        backgroundColor: 'rgb(102,134,205)',
      },
      labelStyle: {
        fontSize: 14,
        color: 'tomato',
      },
      tabStyle: {
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
      },
      style: {
        backgroundColor: 'white',
      },
      statusBarStyle: 'light-content',
    },
  },
);

class App extends React.Component{
  static router = MyNavigator.router;
  render() {
    return (
      <MyNavigator
        navigation={this.props.navigation}
      />
    );
  }
}

export default App