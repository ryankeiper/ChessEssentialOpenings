import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen'
import TrainingMenuScreen from '../screens/TrainingMenuScreen'

const RootNavigator = StackNavigator({
    HomeScreen: { screen: HomeScreen },
    TrainingMenuScreen: { screen: TrainingMenuScreen }
},
{
    headerMode: 'none',
    navigationOptions: {
        header: null,
    }
})

export default RootNavigator;