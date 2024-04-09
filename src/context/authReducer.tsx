import { AuthState } from './AuthContext';
type AuthAction=
    |{type:'signIn'}
    |{type:'changeFavIcon', payload:string}
    |{type:'logOut'}
    |{type:'changeUserName',payload:string}

export const authReducer=(state:AuthState, action:AuthAction): AuthState =>{
//ese auth reducer siempre tiene que regresar un estado, en este caso de tipo AuthState
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn:true,
                userName:'No-userName-define'
            };
            break;
        case 'changeFavIcon':
            return{
                ...state,
                favoriteIcon:action.payload
            }
        case'logOut':
            return{
                ...state,
                isLoggedIn:false,
                userName:undefined,
                favoriteIcon:undefined
            }
        case'changeUserName':
        return{
            ...state,
            userName:action.payload
        }
        default:
            return state;
    }
}