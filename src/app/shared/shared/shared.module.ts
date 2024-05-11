import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog'
import { MatTableModule} from '@angular/material/table'
import { MatPaginatorModule} from '@angular/material/paginator'
@NgModule({
  declarations: [],
  providers:[{provide:MatDialogRef,useValue:{}}],
  imports: [CommonModule, MatButtonModule,BrowserAnimationsModule,MatDialogModule,MatTableModule, MatPaginatorModule],
  exports: [MatButtonModule,MatSnackBarModule,BrowserAnimationsModule,MatDialogModule,MatTableModule, MatPaginatorModule],
})
export class SharedModule {}
