import {View, Text, Dimensions, Platform, Image} from 'react-native';
import {images, icons} from '../../constants/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, FONTS, SIZES} from '../../../atomic/theme/common.theme';
import {useRoute} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/core';
import HomeTabScreen from './home.tab.screen';

export const RootTabs = () => {
  type RootStackParamList = {
    Home: {
      title: string;
    };
    Rewards: {
      title: string;
    };
    PFM: {
      title: string;
    };
    More: {
      title: string;
    };
  };

  const Tab = createBottomTabNavigator<RootStackParamList>();

  type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

  function PlaceholderTabScreen() {
    const route = useRoute<HomeScreenRouteProp>();
    const {title} = route.params;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{title}</Text>
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
        component={HomeTabScreen}
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
