import { NgModule } from "@angular/core";

import { HttpClientModule, provideHttpClient, withInterceptors } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { httpRequestAuthorizationInterceptor } from "./core/interceptors/http-request-authorization.interceptor";
import { httpRequestLoadingInterceptor } from "./core/interceptors/http-request-loading.interceptor";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [
    provideHttpClient(withInterceptors([httpRequestAuthorizationInterceptor, httpRequestLoadingInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
