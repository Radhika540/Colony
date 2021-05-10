import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigation from './DrawerNavigation';
import Wallet from '../Screens/Wallet';
import SettingScreen from '../Screens/SettingsScreen';
import FAQScreen from '../Screens/FAQScreen';
import PrivacyPolicyScreen from '../Screens/PrivacyPolicyScreen';
import NotificationScreen from '../Screens/NotificationScreen';

const Stack = createStackNavigator()
function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={false}
      >
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name='FAQScreen' component={FAQScreen} />
        <Stack.Screen name='PrivacyPolicyScreen' component={PrivacyPolicyScreen} />
        <Stack.Screen name='NotificationScreen' component={NotificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default AppNavigation