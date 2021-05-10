import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScreen';
import React from 'react'
import DrawerComponent from '../Components/DrawerComponent';
import Wallet from '../Screens/Wallet';
import SettingScreen from '../Screens/SettingsScreen';
import NotificationScreen from '../Screens/NotificationScreen';
import PrivacyPolicyScreen from '../Screens/PrivacyPolicyScreen';
import FAQScreen from '../Screens/FAQScreen';

const Drawer = createDrawerNavigator();

function DrawerNavigation(props) {
  return (
    <Drawer.Navigator
      drawerContent={(props) =>
        <DrawerComponent {...props} />
      }
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="Wallet" component={Wallet} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
      <Drawer.Screen name="NotificationScreen" component={NotificationScreen} />
      <Drawer.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
      <Drawer.Screen name="FAQScreen" component={FAQScreen} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigation