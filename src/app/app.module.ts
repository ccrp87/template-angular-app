import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { HttpClientModule, provideHttpClient, withInterceptors } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { httpRequestAuthorizationInterceptor } from "./core/interceptors/http-request-authorization.interceptor";
import { httpRequestHandlerErrorsInterceptor } from "./core/interceptors/http-request-handler-api-errors.interceptor";
import { httpRequestLoadingInterceptor } from "./core/interceptors/http-request-loading.interceptor";
import { SeguridadModule } from "./modules/seguridad/seguridad.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SeguridadModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule
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
export class AppModule { }
