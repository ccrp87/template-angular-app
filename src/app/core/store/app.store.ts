import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { SeguridadService } from '../../modulos/seguridad/servicios/seguridad.service';
import { inject } from '@angular/core';



type AppState = {
  loginUser: boolean;
  loading: boolean;
};
const initialState: AppState = {
  loginUser: false,
  loading: false,
};
export const AppStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    startSessionUser(status: boolean) {
      patchState(store, (state) => ({ loginUser: status }));
    },
  }),),
  withHooks({
    onInit(store) {
 const seguridadService = inject(SeguridadService);

      store.startSessionUser(seguridadService.hasSessionActive());
    },
    onDestroy(store) {
     
    },
  }),
);
