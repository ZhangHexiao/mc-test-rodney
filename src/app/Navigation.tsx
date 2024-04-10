import React, {ReactElement} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {DashboardStack} from './scenes/dashboard.stack';
import {RootTabs} from './scenes/tabs/tabs.stack';
import {NavigationHeader} from '../atomic/molecules/navigation.header.component';
import CardControlsScreen from './scenes/tabs/card.controls.screen';

export type RootRoutes = {
  Dashboard: undefined;
  RootTabs: undefined;
};

const Stack = createStackNavigator<RootRoutes>();

function Navigation(): ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerTitle: 'Root Header Title',
        })}
        initialRouteName="Dashboard">
        <Stack.Screen
          name="Dashboard"
          component={DashboardStack}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RootTabs"
          component={RootTabs}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
