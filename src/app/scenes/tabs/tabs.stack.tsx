import {View, Text, Dimensions, Platform, Image} from 'react-native';
import {images, icons} from '../../constants/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, FONTS, SIZES} from '../../../atomic/theme/common.theme';
import {useRoute} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/core';
import HomeTabScreen from './home.tab.screen';
import {createStackNavigator} from '@react-navigation/stack';
import CardControlsScreen from './card.controls.screen';
import {NavigationHeader} from '../../../atomic/molecules/navigation.header.component';

export type HomeTabRoutes = {
  HomeTab: undefined;
  CardDetail: undefined;
};

const Tab = createBottomTabNavigator();
const HomeTabStack = createStackNavigator<HomeTabRoutes>();

const HomeTabStackNavigator = () => {
  return (
    <HomeTabStack.Navigator>
      <HomeTabStack.Screen
        name="HomeTab"
        options={{
          header: ({navigation, route, options}) => {
            const title = 'Cards'; // You can also use route.params to dynamically set the title
            return <NavigationHeader title={title} />;
          },
        }}
        component={HomeTabScreen}
      />
      <HomeTabStack.Screen
        name="CardDetail"
        options={{
          header: ({navigation, route, options}) => {
            const title = 'Card Controls'; // You can also use route.params to dynamically set the title
            return (
              <NavigationHeader
                title={title}
                rightIcon={icons.leftArrow}
                onIconPress={navigation.goBack}
              />
            );
          },
        }}
        component={CardControlsScreen}
      />
    </HomeTabStack.Navigator>
  );
};

export const RootTabs = () => {
  function PlaceholderTabScreen() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Not build</Text>
      </View>
    );
  }
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: Platform.OS !== 'ios',
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: 72,
          backgroundColor: COLORS.white,
          marginBottom: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeTabStackNavigator}
        options={{
          title: '',
          tabBarIcon: ({focused}: {focused: boolean}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  paddingTop: 16,
                }}>
                <Image
                  source={focused ? icons.tabIconFilled : icons.tabIcon}
                  resizeMode="contain"
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? COLORS.primary : COLORS.grey400,
                  }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'regular',
                    color: focused ? COLORS.primary : COLORS.grey400,
                    marginTop: 4,
                  }}>
                  Home
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Rewards"
        component={PlaceholderTabScreen}
        initialParams={{title: 'Rewards'}}
        options={{
          title: '',
          tabBarIcon: ({focused}: {focused: boolean}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  paddingTop: 16,
                }}>
                <Image
                  source={focused ? icons.tabIconFilled : icons.tabIcon}
                  resizeMode="contain"
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? COLORS.primary : COLORS.grey400,
                  }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'regular',
                    color: focused ? COLORS.primary : COLORS.grey400,
                    marginTop: 4,
                  }}>
                  Rewards
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="PFM"
        component={PlaceholderTabScreen}
        initialParams={{title: 'PFM'}}
        options={{
          title: '',
          tabBarIcon: ({focused}: {focused: boolean}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  paddingTop: 16,
                }}>
                <Image
                  source={focused ? icons.tabIconFilled : icons.tabIcon}
                  resizeMode="contain"
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? COLORS.primary : COLORS.grey400,
                  }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'regular',
                    color: focused ? COLORS.primary : COLORS.grey400,
                    marginTop: 4,
                  }}>
                  PFM
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="More"
        component={PlaceholderTabScreen}
        initialParams={{title: 'More'}}
        options={{
          title: '',
          tabBarIcon: ({focused}: {focused: boolean}) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  paddingTop: 16,
                }}>
                <Image
                  source={focused ? icons.tabIconFilled : icons.tabIcon}
                  resizeMode="contain"
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: focused ? COLORS.primary : COLORS.grey400,
                  }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'regular',
                    color: focused ? COLORS.primary : COLORS.grey400,
                    marginTop: 4,
                  }}>
                  More
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
