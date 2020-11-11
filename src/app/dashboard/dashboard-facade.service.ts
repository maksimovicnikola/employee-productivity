import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DashboardState } from '../core/models';
import { ShiftService } from '../shared/services/shift.service';
import { UserService } from '../shared/services/user.service';

let _state: DashboardState = {
  users: [],
  shifts: [],
  selectedUsers: [],
  query: '',
  pagination: {
    currentPage: 1,
    perPage: 5,
    perPageOptions: [5, 10, 20, 50],
  },
};

@Injectable()
export class DashboardFacadeService implements OnDestroy
{
  private unsubscribe$ = new BehaviorSubject<boolean>(false);

  constructor(private userService: UserService,
    private shiftService: ShiftService) { }

  ngOnDestroy(): void
  {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
