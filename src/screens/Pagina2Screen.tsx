import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme';
import { useNavigation } from '@react-navigation/core'

export const Pagina2Screen = () => {
  const navigator =useNavigation();
  useEffect(() => {    // si no le mando un argumento solo ejecuta el codigo una vez
    navigator.setOptions({
        title:'Hola Mundo',
        headerBackTitle:'',
      }) 
  }, [])
  
  return (
    <View style={styles.globalMargin}>
        <Text style={[styles.title , {color:'black'}]}>
            Pagina2Screen
        </Text>
        <Button
          title = 'Ir página 3'
          onPress={()=>navigator.navigate('Pagina3Screen' as never)}
        />
    </View>
  ) 
}
