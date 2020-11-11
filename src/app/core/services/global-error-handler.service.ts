import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService
{
  handleError(error: HttpErrorResponse): void
  {
    if (error.error instanceof Error)
    {
      console.error('Server error:', error.error.message);
    } else
    {
      console.error('Server error:', error);
    }
  }
}
