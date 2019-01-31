/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */

import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation'
import { Text } from 'react-native'
import Ledger from '../screens/Ledger'
import Month from '../screens/Month'
import Accounts from '../screens/Accounts'
import Analysis from '../screens/Analysis'

const Navigation = createMaterialTopTabNavigator(
    {
        MONTH: Month,
        LEDGER: Ledger,
        ACCOUNTS: Accounts,
        ANALYSIS: Analysis,
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
                backgroundColor: 'rgb(126, 89, 191)',
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
