import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingDashboardScreen from './onboarding.dashboard.screen';
import {NavigationHeader} from '../../atomic/molecules/navigation.header.component';
import {RootTabs} from './tabs/tabs.stack';

export type DashboardRoutes = {
  DashboardOnboarding: undefined;
  RootTabs: undefined;
};

const Stack = createStackNavigator<DashboardRoutes>();
export const DashboardStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="DashboardOnboarding"
      screenOptions={{
        headerTitle: 'Empty Stack',
      }}>
      <Stack.Screen
        name="DashboardOnboarding"
        component={OnboardingDashboardScreen}
        options={{
          header: ({navigation, route, options}) => {
            const title = 'Onboarding';
            return <NavigationHeader title={title} />;
          },
        }}
      />
    </Stack.Navigator>
  );
};
