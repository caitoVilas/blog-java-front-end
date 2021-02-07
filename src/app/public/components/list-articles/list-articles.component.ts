import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/core/models/article';
import { ArticleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {

  articulos: Article[] = [];
  listArticulos: Article[] = [];

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.nuevos()
  }

  nuevos() {

    this.articleService.getNews().subscribe(
      response => {
        this.articulos = response.reverse();

        for(let x =0; x < 5; x++){
          this.listArticulos.push(this.articulos[x]);
        }
      }
    );
  }

  verArticulo(id: number){

      this.router.navigate(['/detalle/' + id]);
  }

}
