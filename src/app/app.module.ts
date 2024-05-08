import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SeguridadModule } from "./modulos/seguridad/seguridad.module";
import { CoreModule } from "./core/core.module";
import { HttpClientModule, provideHttpClient, withInterceptors } from "@angular/common/http";
import { httpRequestAuthorizationInterceptor } from "./core/interceptors/http-request-authorization.interceptor";
import { httpRequestLoadingInterceptor } from "./core/interceptors/http-request-loading.interceptor";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,FormsModule,ReactiveFormsModule , AppRoutingModule, SeguridadModule, CoreModule, HttpClientModule,SharedModule],
  providers: [provideHttpClient(withInterceptors([httpRequestAuthorizationInterceptor, httpRequestLoadingInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule {}
