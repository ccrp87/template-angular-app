import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog'
@NgModule({
  declarations: [],
  providers:[{provide:MatDialogRef,useValue:{}}],
  imports: [CommonModule, MatButtonModule,BrowserAnimationsModule,MatDialogModule],
  exports: [MatButtonModule,MatSnackBarModule,BrowserAnimationsModule,MatDialogModule],
})
export class SharedModule {}
