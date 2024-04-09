import React from 'react';
import { Text, View } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator =()=> {
    const {top} = useSafeAreaInsets(); //safe area for notch iphones
  return (
    <Tab.Navigator
        style={{paddingTop:top}}
        sceneContainerStyle={{
            backgroundColor:'white'
        }}
        screenOptions={
            ({route})=>({
            tabBarPressColor:colors.primary,
            tabBarShowIcon:true, //to add icon 
            tabBarIndicatorStyle:{
                backgroundColor:colors.primary  //Line under selected tab
            },
            tabBarStyle:{
                shadowColor:'transparent',
                elevation:0
            },
            tabBarIcon:({color})=>{
                let iconName:string ='';
                switch (route.name) {
                    case 'ChatScreen':
                        iconName='chatbubble-outline'
                        break;
                    case 'ContactScreen':
                        iconName='people-outline'
                        break;
                    case 'AlbumScreen':
                        iconName='albums-outline'
                        break;
                        
                    default:
                        break;
                }
                return(
                    <View>
                        <Text style={{color:color}}>
                            <Icon name={iconName} size={25} color="#900" />;
                        </Text>
                    </View>
                )
            }
        })
    }
        >
        <Tab.Screen name="ChatScreen"  component={ChatScreen} />
        <Tab.Screen name="ContactScreen" component={ContactScreen} />
        <Tab.Screen name="AlbumScreen" component={AlbumScreen} />
    </Tab.Navigator>
  );
}