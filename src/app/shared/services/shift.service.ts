import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';
import { catchError, delay } from 'rxjs/operators';
import { Shift } from 'src/app/core/models';
import { GlobalErrorHandlerService } from 'src/app/core/services/global-error-handler.service';

const API_URL = `${ environment.api_url }/shifts`;

@Injectable()
export class ShiftService
{

  constructor(private http: HttpClient, private errorHandler: GlobalErrorHandlerService) { }

  getShifts(): Observable<Shift[]>
  {
    return this.http.get<Shift[]>(`${ API_URL }`)
      .pipe(
        delay(500),
        catchError(err =>
        {
          this.errorHandler.handleError(err);
          return of([]);
        }));
  }
}
