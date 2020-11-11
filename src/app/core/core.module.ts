import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [DialogComponent, LoadingSpinnerComponent],
  imports: [
    CommonModule
  ],
  exports: [DialogComponent, LoadingSpinnerComponent]
})
export class CoreModule { }
