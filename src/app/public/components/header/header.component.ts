import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/core/services/token.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario: string;
  rol: string;
  isLoged: boolean = false;
  isNotLogged = true;
  isAdmin: boolean = false
  constructor(
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {

    if(this.tokenService.getToken() ){
        this.isLoged = true;
        this.isNotLogged = false;
        this.usuario = this.tokenService.getUserName();
        this.tokenService.getAuthorities().forEach(item => {
          if (item == 'ROLE_ADMIN'){
            this.isAdmin = true;
          }
          });
     }else{
       this.isLoged = false;
       this.isNotLogged = true;
     }
     
    }

    onLogout(): void {

      Swal.fire(this.usuario + ' has Cerrado Session', 'Hasta Pronto !!','info');
      this.isLoged = false;
      this.isNotLogged = true;
      this.tokenService.logout();
    }

}
