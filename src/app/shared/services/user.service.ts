import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { catchError, delay } from 'rxjs/operators';
import { Pagination, User } from 'src/app/core/models';
import { GlobalErrorHandlerService } from 'src/app/core/services/global-error-handler.service';


const API_URL = `${ environment.api_url }/users`;

@Injectable()
export class UserService
{

  constructor(private http: HttpClient, private errorHandler: GlobalErrorHandlerService) { }

  getUsers(query: string, pagination: Pagination): Observable<User[]>
  {
    return this.http.get<User[]>(`${ API_URL }`)
      .pipe(
        delay(500),
        catchError(err =>
        {
          this.errorHandler.handleError(err);
          return of([]);
        }));
  }
}
