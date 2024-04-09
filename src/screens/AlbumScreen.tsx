import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableIcon } from '../component/TouchableIcon'
import { colors } from '../theme/AppTheme'
import { AuthContext, AuthProvider } from '../context/AuthContext';

export const AlbumScreen = () => {
  const {logOut,authState:{isLoggedIn}} = useContext(AuthContext)
  return (
    <View>
        <Text style={{color:'black'}}>
            AlbumScreen
        </Text>
        {
          (isLoggedIn)?
          <TouchableOpacity onPress={()=>logOut()}>
            <Icon 
                  name='log-out-outline'    
                  size={50} 
                  color={colors.primary} />
          </TouchableOpacity>
          :null
        }
    </View>
  )
}
