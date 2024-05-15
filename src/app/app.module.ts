import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SeguridadModule } from "./modulos/seguridad/seguridad.module";
import { CoreModule } from "./core/core.module";
import { HttpClientModule, provideHttpClient, withInterceptors } from "@angular/common/http";
import { httpRequestAuthorizationInterceptor } from "./core/interceptors/http-request-authorization.interceptor";
import { httpRequestLoadingInterceptor } from "./core/interceptors/http-request-loading.interceptor";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/shared.module";
import { httpRequestHandlerErrorsInterceptor } from "./core/interceptors/http-request-handler-api-errors.interceptor";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SeguimientoComercialModule } from "./modulos/seguimiento-comercial/seguimiento-comercial.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SeguridadModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    SeguimientoComercialModule
  ],
  providers: [
    provideHttpClient(
      withInterceptors([
        httpRequestAuthorizationInterceptor,
        httpRequestLoadingInterceptor,
        httpRequestHandlerErrorsInterceptor
      ])
    )
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
