import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatListModule,
  MatTableModule,
  MatCardModule
]

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    CommonModule,
    BrowserAnimationsModule,
    MATERIAL_MODULES
  ],
  exports: [BrowserAnimationsModule, MATERIAL_MODULES]
})
export class MaterialModule { }
