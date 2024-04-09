import React from 'react';
import { Text, useWindowDimensions, View,Image,TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { Page1Screen } from '../screens/Page1Screen';
import { SettingScreens } from '../screens/SettingScreens';
import { StyleSheet } from 'react-native';
import { Tabs } from './ButtomTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/AppTheme';

const Drawer = createDrawerNavigator();

export const DrawerNavigatorComplex=()=>{
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
    drawerContent={(props)=><InternalMenu{...props}/>}
    screenOptions={{
      drawerType: width >= 768 ? 'permanent' : 'front',
    }}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingScreens"  component={SettingScreens} />
    </Drawer.Navigator>
  );
}
const InternalMenu=({navigation}:DrawerContentComponentProps)=>{
  return(
    <DrawerContentScrollView>
      <View style={{ alignItems:'center'}}>
        <Image
            source={{uri: 'https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg'}}
            style={styles.avatar}
        />
      </View>
      {/* Menú options*/}

      <View style={{...styles.menuContainer}}>
          <TouchableOpacity   
            onPress={()=>navigation.navigate('Tabs')}
          >
          <View style={styles.menuIconTextItem}>
            <Text  >
              <Icon name="grid-outline  " size={30} color={colors.primary} />
            </Text>
            <Text style={styles.menuText}>  Navegación</Text>
          </View>
          
          </TouchableOpacity>
        
        
        <TouchableOpacity 
           style={styles.menuButton}
           onPress={()=>navigation.navigate('SettingScreens')}
           >
          <View style={styles.menuIconTextItem}>
            <Text  >
              <Icon name="settings-outline" size={30} color={colors.primary} />
            </Text>
            <Text style={styles.menuText}> Ajustes</Text>
          </View>
        </TouchableOpacity>
      </View>
      
    </DrawerContentScrollView>   
  )
}

const styles = StyleSheet.create({
    avatar:{
      width:150,
      height:150,
      borderRadius:100
    },
    menuContainer:{
      marginVertical:30,
      marginHorizontal:30,
      alignItems:'center'
    },
    menuText:{
      color:'black',
      fontStyle:'italic',
      fontSize:20,
      marginTop:5
    },
    menuButton:{
        marginVertical:10
    },
    menuIconTextItem:{
      flexDirection:'row'
    }
});