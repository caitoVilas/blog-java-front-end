import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Article } from 'src/app/core/models/article';
import { ArticleService } from 'src/app/core/services/article.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-detalle-articulo',
  templateUrl: './detalle-articulo.component.html',
  styleUrls: ['./detalle-articulo.component.css']
})
export class DetalleArticuloComponent implements OnInit {

  idArticulo: number;
  articulo: Article;

  constructor(
    private ruta: ActivatedRoute,
    private router: Router,
    private location: Location,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.ruta.params.subscribe((p: Params) => {
      this.idArticulo = p.id;
      this.getArticulo();
    });
  }

  getArticulo(){

    this.articleService.getArticle(this.idArticulo).subscribe(
      response => {

        this.articulo = response;
      }
    );
  }

  volver(){
   
    this.location.back();
  }
}
