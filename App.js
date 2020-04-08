/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Details from './screens/Details';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor="#F17324" />
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              var iconName = '';

              if (route.name == 'Home') iconName = 'home';
              if (route.name == 'Watchlist') iconName = 'heart';
              if (route.name == 'Deals') iconName = 'tag';
              if (route.name == 'Notifications') iconName = 'bell';

              // You can return any component that you like here!
              var color = focused ? '#F17324' : '#444D61';
              return (
                <Icon
                  name={iconName}
                  size={20}
                  color={color}
                  style={{paddingTop: 10}}
                />
              );
            },
          })}
          tabBarOptions={{
            showLabel: true,
            activeTintColor: '#F17324',
            inactiveTintColor: '#A2A2A2',
            labelStyle: {
              fontFamily: 'CircularStd-Bold',
            },
            style: {
              backgroundColor: '#fff',
              height: 60,
              paddingBottom: 5,
            },
          }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Watchlist" component={Details} />
          <Tab.Screen name="Deals" component={Details} />
          <Tab.Screen name="Notifications" component={Details} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
