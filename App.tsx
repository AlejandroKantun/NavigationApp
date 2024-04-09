import 'react-native-gesture-handler';
import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import { DrawerNavigatorComplex } from './src/navigator/DrawerNavigatorComplex';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>{/* Rest of your app code */}
      <AppState>
        <DrawerNavigatorComplex/>
      </AppState>
    </NavigationContainer>
  
  )
}

const AppState=({children}:any)=>{
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}
export default App;

