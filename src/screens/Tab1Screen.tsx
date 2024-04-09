import React from 'react'
import { View,Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../component/TouchableIcon';
import { colors } from '../theme/AppTheme';

export const Tab1Screen = () => {
  const {top} =useSafeAreaInsets()
  return (
    <View
      style={{marginTop:top}}
    
      >
        <Text style={{color:'black'}}>
            Tab1Screen
        </Text>
        <Text>
           <TouchableIcon iconName="arrow-back-outline"/>
           <TouchableIcon iconName="albums-outline"/>
           <TouchableIcon iconName="airplane-outline"/>
           <TouchableIcon iconName="bug-outline"/>
        </Text>
    </View>
  )
}
