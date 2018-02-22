import React from 'react';
import { TabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen'
import TrainingMenuScreen from '../screens/TrainingMenuScreen'

const RootNavigator = TabNavigator({
    HomeScreen: { screen: HomeScreen },
    TrainingMenuScreen: { screen: TrainingMenuScreen }
},
{
    headerMode: 'none',
    navigationOptions: {
        tabBarVisible: false,
    }
})

export default RootNavigator;