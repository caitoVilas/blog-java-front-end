import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/core/models/mensaje';
import { MensajeService } from 'src/app/core/services/mensaje.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  // PAGINADOR
  page = 0;
  size = 0;
  order = 'id';
  asc = true;
  isFirst = false;
  isLast = false;
  totalPages : Array<number> = [];

mensajes: Mensaje[] = [];

  constructor(
    private msjeService: MensajeService
  ) { }

  ngOnInit(): void {

    this.getMensajes();
  }

  getMensajes() {

    this.msjeService.getMensajes(this.page, this.size,this.order,this.asc).subscribe(
      response => {
        this.mensajes = response.content;
        this.isFirst = response.first;
        this.isLast = response.last;
        this.totalPages = new Array(response['totalPages']);
      },
      err => {
        console.log(err);
      }
    );
  }

  rewind(): void {
    if(!this.isFirst){
      this.page--;
      this.getMensajes();
    }
  }

  forward(): void {
    if(!this.isLast){
      this.page++;
      this.getMensajes();
    }
  }

  setPage(page: number): void {
    this.page  = page;
    this.getMensajes();
  }
}
