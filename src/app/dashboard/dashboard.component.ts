import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DashboardState } from '../core/models';
import { DashboardFacadeService } from './dashboard-facade.service';

@Component({
  selector: 'emp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent
{

  public dashboardState$: Observable<DashboardState> = this.facade.state$;
  constructor(private facade: DashboardFacadeService)
  {
  }

  addUser(): void
  {
    this.facade.addUser();
  }
}
