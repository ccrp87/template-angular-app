import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { LoadingComponent } from "./components/loading/loading.component";
import { NavbarComponent } from "./components/navbar/navbar.component";


@NgModule({
  declarations: [LoadingComponent, NavbarComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [LoadingComponent, NavbarComponent, MatButtonModule]
})
export class CoreModule { }
