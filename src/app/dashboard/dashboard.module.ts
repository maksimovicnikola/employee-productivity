import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardFacadeService } from './dashboard-facade.service';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [DashboardComponent],
  providers: [DashboardFacadeService]
})
export class DashboardModule { }
