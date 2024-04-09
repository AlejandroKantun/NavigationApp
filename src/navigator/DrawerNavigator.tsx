import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Page1Screen } from '../screens/Page1Screen';
import { SettingScreens } from '../screens/SettingScreens';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const DrawerNavigator=()=>{
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
    screenOptions={{
      drawerType: width >= 768 ? 'permanent' : 'front',
    }}
    >
      <Drawer.Screen name="Feed"    options={{title:'Home'}} component={Page1Screen} />
      <Drawer.Screen name="Article" options={{title:'Setting'}} component={SettingScreens} />
    </Drawer.Navigator>
  );
}