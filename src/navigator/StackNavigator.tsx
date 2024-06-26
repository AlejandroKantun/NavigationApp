import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';


export type RootStackParams={
    Pagina1Screen:undefined, //la doc oficial recomienda dejar como undefined cuando no se pasa nada
    Pagina2Screen:undefined,//la doc oficial recomienda dejar como undefined cuando no se pasa nada
    Pagina3Screen:undefined,//la doc oficial recomienda dejar como undefined cuando no se pasa nada
    PersonaScreen:{id:number, nombre:string},
}

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator =()=>{
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle:{
          elevation:0, //android
          shadowColor:'transparent', // ios
        },
        cardStyle:{
            backgroundColor:'white'
          }
      }}
      >
      <Stack.Screen name="Pagina1Screen" options={{title:'Página 1'}}component={Pagina1Screen} />
      <Stack.Screen name="Pagina2Screen" options={{title:'Página 2'}}component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" options={{title:'Página 3'}}component={Pagina3Screen} />
      <Stack.Screen name="PersonaScreen" component={PersonaScreen} />

    </Stack.Navigator>
  );
}

export default StackNavigator;