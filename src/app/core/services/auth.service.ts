import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../models/jwt-dto';
import { LoginUsuario } from '../models/login-usuario';
import { NuevoUsuario } from '../models/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  autURL = ' http://localhost:8080/api/auth/';

  constructor(
    private http: HttpClient
  ) { }

  newUser(user: NuevoUsuario): Observable<any> {

    return this.http.post<any>(this.autURL + 'nuevo', user);
  }

  login(user: LoginUsuario): Observable<JwtDto> {

    return this.http.post<JwtDto>(this.autURL + 'login', user);
  }
}
