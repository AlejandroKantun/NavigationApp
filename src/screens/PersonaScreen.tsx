import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

//interface routesParams{
//    id:number,
//    nombre:string
//}

interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'>{};

export const PersonaScreen = ({route,navigation}:Props) => {
    //console.log (JSON.stringify(props.route.params,null,3))
    //const params = route.params as routesParams;
    const params = route.params;

    useEffect(() => {
        // Para forzar un tipo se puede usar ! exclamación para indicar que estamos esperando que funcione bien o "as any"
        navigation.setOptions({
            title:params.nombre
        })
    }, [])
    
    // using context
    const {changeUserName} = useContext(AuthContext)
    useEffect(() => {
       //To update UserName
        changeUserName(params.nombre);
    }, [])
  return (
    <View style={styles.globalMargin}>
        <Text style={[styles.title , {color:'black'}]}>
            {JSON.stringify(route.params,null,3)}
        </Text>
    </View>
  )
}
