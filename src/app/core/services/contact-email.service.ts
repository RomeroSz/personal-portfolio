import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError, map, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactEmailService {

  constructor(private http: HttpClient,) { }

  contactEmailSubmit(contactformGroup: any): Observable<any> {
    if (!contactformGroup.name || !contactformGroup.email || !contactformGroup.message) {
      return throwError('Datos inválidos');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactformGroup.email)) {
      return throwError('Correo electrónico inválido');
    }
    return this.http.post(`${environment.apiBackend}${environment.apiEndpointEmail}`, contactformGroup, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          if (response.status !== 200) {
            throw new Error('La llamada al servidor no fue exitosa');
          }
          if (response && !(Array.isArray(response) && response.length === 0)) {
            return response.body;
          } else {
            throw new Error('Fallo en la plataforma');
          }
        }),
        catchError((error: any) => {
          return throwError('Inténtalo de nuevo más tarde.');
        })
      );
  }


}
