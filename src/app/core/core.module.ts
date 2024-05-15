import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoadingComponent } from "./componentes/loading/loading.component";
import { MatButtonModule } from "@angular/material/button";
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TryCurrencyPipe } from "./pipes/try-currency.pipe";

@NgModule({
  declarations: [LoadingComponent, NavbarComponent, SidebarComponent,TryCurrencyPipe],
  imports: [CommonModule, MatButtonModule,FormsModule,ReactiveFormsModule],
  exports: [LoadingComponent, NavbarComponent,SidebarComponent,FormsModule,ReactiveFormsModule,TryCurrencyPipe]
})
export class CoreModule {}
