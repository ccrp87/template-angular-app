import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { UserSession } from '../../modulos/seguridad/modelos/seguridad.model';


 type AppState = {
    sessionUser:UserSession;
    loading: boolean,
}
const initialState: AppState = {
        sessionUser:{
            DisplayName:"",
            Email:"",
            jwt:"",
            UserName:""
        },
        loading:false
  };
export const AppStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store) => ({
        updateSessionUser(userSession:UserSession):void{            
            patchState(store,(state)=>({sessionUser:userSession}))
        }
    }),
));