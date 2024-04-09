import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext, AuthState } from '../context/AuthContext';
import { authReducer } from '../context/authReducer';
import { colors } from '../theme/AppTheme';

export const SettingScreens = () => {
  const insets= useSafeAreaInsets(); //insets regresa las caracteristicas para delimitar de forma segura las areas cuando tiene notch
  
  const {authState} = useContext(AuthContext)
  
  return (
    <View style={{marginTop: insets.top}}>
        <Text style={{color:'black'}}>
          SETTINGS
        </Text>
        <Text style={{color:'black'}}>
            {JSON.stringify(authState,null,4 )}
        </Text>
        {
          authState.favoriteIcon?(<Icon 
            name={authState.favoriteIcon}    
            size={150} 
            color={colors.primary} />):null
        }
    </View>
  )
}
