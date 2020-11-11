import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { delay } from 'rxjs/operators';
import { Shift } from 'src/app/core/models';

const API_URL = `${environment.api_url}/shifts`;

@Injectable()
export class ShiftService {

  constructor(private http: HttpClient) { }

  getShifts(): Observable<Shift[]> {
    return this.http.get<Shift[]>(`${API_URL}`).pipe(delay(500))
  }
}
