import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoadingComponent } from "./componentes/loading/loading.component";
import { LoadingService } from "./services/loading/loading.service";

@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule],
  exports: [LoadingComponent]
})
export class CoreModule {}
