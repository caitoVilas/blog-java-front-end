import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensaje } from '../models/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  msjURL = 'http://localhost:8080/api/public/mensaje_usuario/';

  constructor(
    private http: HttpClient
  ) { }

  getMensajes(page: number, size: number, order: string, asc: boolean): Observable<any> {

    return this.http.get<any>(this.msjURL + 'listar?' + `page=${page}& size=${size}& order=${order}& asc=${asc}`);
  }
}
