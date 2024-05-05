import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SeguridadModule } from "./modulos/seguridad/seguridad.module";
import { CoreModule } from "./core/core.module";
import { HttpClientModule, provideHttpClient, withInterceptors } from "@angular/common/http";
import { httpRequestAuthorizationInterceptor } from "./core/interceptors/http-request-authorization.interceptor";
import { httpRequestLoadingInterceptor } from "./core/interceptors/http-request-loading.interceptor";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule, provideAnimations } from "@angular/platform-browser/animations";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SeguridadModule, CoreModule, HttpClientModule, BrowserAnimationsModule],
  providers: [
    provideHttpClient(withInterceptors([httpRequestAuthorizationInterceptor, httpRequestLoadingInterceptor])),
    provideAnimations()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
