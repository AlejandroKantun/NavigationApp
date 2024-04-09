import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { AuthContext } from '../context/AuthContext';

export const ContactScreen = () => {
  const {signIn,authState:{isLoggedIn}} = useContext(AuthContext)

  return (
    <View>
        <Text style={{color:'black'}}>
          ContactScreen
        </Text>
        
        {
          !isLoggedIn? <Button title='SignIn' onPress={()=>signIn()}/>:null
        }
          
        
    </View>
  )
}
