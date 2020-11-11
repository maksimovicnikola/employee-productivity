import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { switchMap, takeUntil, toArray } from 'rxjs/operators';
import { DashboardState, Shift, User } from '../core/models';
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
  private unsubscribe$ = new Subject<boolean>();

  private store = new BehaviorSubject<DashboardState>(_state);
  public state$ = this.store.asObservable();

  constructor(private userService: UserService,
    private shiftService: ShiftService)
  {
    this.getUsersAndShifts();
  }

  ngOnDestroy(): void
  {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  getUsersAndShifts()
  {
    const users$ = this.userService.getUsers(_state.query, _state.pagination);
    const shifts$ = this.shiftService.getShifts();

    combineLatest([users$, shifts$])
      .pipe(
        switchMap(([users, shifts]) =>
        {
          this.store.next({ ...this.store.value, shifts })
          return this.getUsersWithHours(users, shifts)
        }),
        toArray(),
        takeUntil(this.unsubscribe$))
      .subscribe(users =>
      {
        this.store.next({ ...this.store.value, users })
      });
  }

  addUser(){
    const newUser: User = { email: 'test@test.com', id: 56, name: 'Pera Peric', rate: 20, status: 'asd', overtime_rate: 30 };
    const users = this.store.value.users;
    users.push(newUser);
    this.store.next({ ...this.store.value, users })
  }

  private getUsersWithHours(users: User[], shifts: Shift[])
  {
    shifts.forEach(shift =>
    {
      const user = users.find(u => u.id === shift.employee_id);
      user.regular_hours ? user.regular_hours += this.getHours(shift.clock_in, shift.clock_out) : user.regular_hours = this.getHours(shift.clock_in, shift.clock_out);
    })

    return users;
  }

  private getHours(startDate: Date, endDate: Date): number
  {
    const clockIn = new Date(startDate).getTime();
    const clockOut = new Date(endDate).getTime();
    const milliseconds = Math.abs(clockOut - clockIn);
    const hours = milliseconds / 36e5;

    return Math.round(hours);
  }
}
