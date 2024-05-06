import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoadingComponent } from "./componentes/loading/loading.component";
import { MatButtonModule } from "@angular/material/button";
import { NavbarComponent } from "./componentes/navbar/navbar.component";

@NgModule({
  declarations: [LoadingComponent, NavbarComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [LoadingComponent, NavbarComponent, MatButtonModule]
})
export class CoreModule {}
