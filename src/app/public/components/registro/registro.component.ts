import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { NuevoUsuario } from 'src/app/core/models/nuevo-usuario';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nuevoUser: NuevoUsuario;
  _nombre: string;
  _nombreUsuario: string;
  _email: string;
  _pasword: string;
  _roles = ['user'];

  frmNewUser: FormGroup;

  constructor(
    private builForm: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.builderFrom();
  }

  builderFrom() {

    this.frmNewUser = this.builForm.group({
      nombre: new FormControl('', [Validators.required]),
      nombreUsuario: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      password: new FormControl('',  [Validators.required])
    });
    this.frmNewUser.valueChanges
    .pipe(debounceTime(500))
    .subscribe(data => {
      this._nombre = data.nombre;
      this._nombreUsuario = data.nombreUsuario;
      this._email = data.email;
      this._pasword = data.password;
    });
  }

  onCreate(){

    this.nuevoUser = new NuevoUsuario(this._nombre, this._nombreUsuario, this._email, this._pasword, this._roles );
    this.authService.newUser(this.nuevoUser).subscribe(
      response => {
        Swal.fire(response.mensaje, '', 'success');
        this.frmNewUser.reset();
        this.router.navigate(['']);
      },
      err => {
        Swal.fire(err.error.mensaje, '','error');
      }
    );
  }

}
