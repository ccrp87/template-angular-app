import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { SeguridadService } from '../../modulos/seguridad/servicios/seguridad.service';
import { inject } from '@angular/core';
import { User } from '../../modulos/seguridad/modelos/seguridad.model';



type AppState = {
  isLoginUser: boolean;
  loading: boolean;
  userLogin: User
};
const initialState: AppState = {
  isLoginUser: false,
  loading: false,
  userLogin:{email:"",FirstName:"",LastName:"",userName:""}
};
export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    startSessionUser(status: boolean,currentUserLogin:User) {
      patchState(store, (state) => ({ isLoginUser: status,userLogin:currentUserLogin }));
    },
    closeSession(){
      patchState(store,(state)=>({isLoginUser:false}))
      localStorage.clear()
    }
  }),),
  withHooks({
    onInit(store) {
     const seguridadService = inject(SeguridadService);
      store.startSessionUser(seguridadService.hasSessionActive(),seguridadService.getUserLogin());
    },
    onDestroy(store) {
     localStorage.setItem("state",JSON.stringify(store))
    },
  }),
);
