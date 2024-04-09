import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { styles } from '../theme/AppTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';


interface Props extends StackScreenProps <any,any>{};
export const Pagina1Screen = ({navigation}:Props) => {
  return (
    <View style={styles.globalMargin}>
        <Text style={[styles.title , {color:'black'}]}>
            Pagina1Screen
        </Text>
        <Button
        title='Ir siguiente pagina'
        onPress={()=>navigation.navigate('Pagina2Screen')}
        />
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity  style={styles.bigButton}
            onPress={()=>navigation.navigate('PersonaScreen',{  //second argument is an object to send information between screens
              id:1,
              nombre:'Pedro'
            })}
            >
          <Text style={styles.bigButtonText}>
              Pedro
            </Text>
        </TouchableOpacity>
        <TouchableOpacity  style={{...styles.bigButton, backgroundColor:'red'}}
            onPress={()=>navigation.navigate('PersonaScreen',{  //second argument is an object to send information between screens
              id:2,
              nombre:'Maria'  
            })}
            >
          <Text style={[styles.bigButtonText]}>
              Maria
            </Text>
        </TouchableOpacity>
        </View>
    </View>
  ) 
}
