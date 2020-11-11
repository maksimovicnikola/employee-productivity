import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { delay } from 'rxjs/operators';
import { Pagination, User } from 'src/app/core/models';


const API_URL = `${environment.api_url}/users`;

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(query: string, pagination: Pagination): Observable<User[]> {
    return this.http.get<User[]>(`${API_URL}`).pipe(delay(500))
  }
}
