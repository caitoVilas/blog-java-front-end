import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { LoginUsuario } from 'src/app/core/models/login-usuario';
import { AuthService } from 'src/app/core/services/auth.service';
import { TokenService } from 'src/app/core/services/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  frmLogin: FormGroup;
  usuario: LoginUsuario;
  nombre: string = '';
  pass: string = '';

  constructor(
    private buildLogin: FormBuilder,
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.loginBuilder();
  }

  loginBuilder() {

    this.frmLogin = this.buildLogin.group({
      nombreUsuario: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
    this.frmLogin.valueChanges
    .pipe(debounceTime(500))
    .subscribe(data => {
     if(this.frmLogin.valid){

      this.nombre = data.nombreUsuario;
      this.pass = data.password;
     }
    });
  }

  onLogin(): void {

    this.usuario = new LoginUsuario(this.nombre, this.pass);
    this.authService.login( this.usuario).subscribe(
      response => {
        Swal.fire('Bienvenido ' + response.nombreUsuario, '' , 'success');
        this.frmLogin.reset();
        this.tokenService.setToken(response.token);
        this.tokenService.setUserName(response.nombreUsuario);
        this.tokenService.setAuthorities(response.authorities);
        this.router.navigate(['']);
      },
      err =>{
           Swal.fire('Usuario No Autorizado' ,'', 'error');
      }
    );
  }

}
