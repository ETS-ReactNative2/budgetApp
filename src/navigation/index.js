/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */

import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation'
import { View, Text } from 'react-native'
// import Ledger from '../../src/screens/Ledger'
import Month from '../screens/Month/containers/app'

class LedgerScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Ledger!</Text>
            </View>
        )
    }
}

class AccountsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Accounts!</Text>
            </View>
        )
    }
}

class AnalysisScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Analysis!</Text>
            </View>
        )
    }
}

const Navigation = createMaterialTopTabNavigator(
    {
        MONTH: Month,
        LEDGER: LedgerScreen,
        ACCOUNTS: AccountsScreen,
        ANALYSIS: AnalysisScreen,
    },
    {
        navigationOptions: ({ navigation }) => ({
            header: null,
            headerMode: 'none',
            tabBarVisible: true,
            tabBarLabel: () => {
                const { routeName } = navigation.state
                switch (routeName) {
                    default:
                        return <Text>{routeName}</Text>
                }
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
)

export default Navigation
