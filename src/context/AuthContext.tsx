import React, { createContext, useReducer } from 'react'
import { authReducer } from './authReducer';

//define information that will be stored
export interface AuthState{
    isLoggedIn:boolean,
    userName?:string,
    favoriteIcon?:string,
}
//Initial State

export const authInitialState:AuthState={
    isLoggedIn:false,
    userName:undefined,
    favoriteIcon:undefined
}

//Usar la interface para decirle a react como luce y que expone el context
export interface AuthContextProps{
    authState:AuthState,
    signIn:()=>void,
    changeFavoriteIcon:(iconnName:string)=>void,
    logOut: () => void;
    changeUserName:(userName:string)=>void,
}

//Crear el contexto
export const AuthContext= createContext({} as AuthContextProps);

//Componente proveedor del estado
export const AuthProvider = ({children} : any)=> {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)
    //para realizar el logIn
    const signIn=()=>{
        dispatch({type:'signIn'})
    }
    //para sobreesribir el icono
    const changeFavoriteIcon=(iconName:string)=>{
        dispatch({type:'changeFavIcon',payload:iconName})
    }
    //para logOut
    const logOut=()=>{
        dispatch({type:'logOut'})
    }
    //para changeUsername
    const changeUserName=(userName:string)=>{
        dispatch({type:'changeUserName',payload:userName})
    }

    return(
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon,
            logOut,
            changeUserName
        }}>
            {children}
        </AuthContext.Provider>
    )
}