import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material/material.module';
import { UserService } from './services/user.service';
import { ShiftService } from './services/shift.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [
    UserService,
    ShiftService
  ],
  exports: [MaterialModule]
})
export class SharedModule { }
