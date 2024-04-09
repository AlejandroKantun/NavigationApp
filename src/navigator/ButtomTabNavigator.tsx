import React from 'react';
import { View ,Text, Platform} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { colors } from '../theme/AppTheme';
import { TopTapNavigator } from './TopTapNavigator';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StackNavigator from './StackNavigator';


export const Tabs =()=>{
    return Platform.OS ==='ios'
    ?<TabsIOS/>
    :<TabsAndroid/>
}


//Menu for Android
const BottomTabAndroid = createMaterialBottomTabNavigator();
const TabsAndroid = ()=> {
  return (
    <BottomTabAndroid.Navigator
    screenOptions={
        ({route})=>(
            {
                tabBarStyle: { 
                    position: 'absolute',
                    borderColor:colors.primary,
                    borderTopWidth:0,
                    elevation:0
                },
                tabBarActiveTintColor:colors.primary,
                tabBarLabelStyle:{
                    fontSize:15
                },
                tabBarIcon:({color,focused})=>{
                    let iconName:string ='';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName='cube-outline'
                            break;
                        case 'Tab2Screen':
                            iconName='planet-outline'
                            break;
                        case 'StackNav':
                            iconName='file-tray-stacked-outline'
                            break;
                            
                        default:
                            break;
                    }
                    return(
                        <View>
                            <Icon name={iconName} size={25} color={color} />
                        </View>
                    )
                }
            } 
        )
    }

        sceneAnimationEnabled={true}
        barStyle={{
            backgroundColor:colors.primary
        }}
        >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{title:'Tab1'}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{title:'Tab2'}} component={TopTapNavigator} />
      <BottomTabAndroid.Screen name="StackNav" options={{title:'StackNavTitle'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

//Menu for IOS
const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
    screenOptions={
        ({route})=>(
            {
                tabBarStyle: { 
                    position: 'absolute',
                    borderColor:colors.primary,
                    borderTopWidth:0,
                    elevation:0
                },
                tabBarActiveTintColor:'blue',
                tabBarLabelStyle:{
                    fontSize:15
                },
                tabBarIcon:({size,color})=>{
                    let iconName:string ='';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName='cube-outline'
                            break;
                        case 'Tab2Screen':
                            iconName='planet-outline'
                            break;
                        case 'StackNav':
                            iconName='file-tray-stacked-outline'
                            break;
                            
                        default:
                            break;
                    }
                    return(
                        <View>
                            <Icon name={iconName} size={50} color={color} />
                        </View>
                    )
                }
            } 
        )
    }
    sceneContainerStyle={{
       borderBlockColor:colors.primary ,
       backgroundColor:'white'
    }}
    //tabBarButton: (props) => <TouchableOpacity {...props} />;
    >
      <BottomTabIOS.Screen name="Tab1Screen" options={{title:'Tab1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{title:'Tab2'}} component={TopTapNavigator} />
      <BottomTabIOS.Screen name="StackNav" options={{title:'StackNavTitle'}} component={Tab3Screen} />
    </BottomTabIOS.Navigator>
  );
}

