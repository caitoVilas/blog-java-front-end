import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/core/models/article';
import { ArticleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {

  articulos: Article[] = []

  // PAGINADOR
  page = 0;
  size = 10;
  order = 'id';
  asc = false;
  isFirst = false;
  isLast = false;
  totalPages : Array<number> = [];

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {

    this.articleService.getArticles(this.page, this.size, this.order, this.asc).subscribe(
      response => {
 
        this.articulos = response.content;
        this.isFirst = response.first;
        this.isLast = response.last;
        this.totalPages = new Array(response['totalPages']);
        
      }
    );
  }

  verDetalle(id: number){

    this.router.navigate(['/detalle/' + id]);
  }

  rewind(): void {
    if(!this.isFirst){
      this.page--;
      this.getArticles();
    }
  }

  forward(): void {
    if(!this.isLast){
      this.page++;
      this.getArticles();
    }
  }

  setPage(page: number): void {
    this.page  = page;
    this.getArticles();
  }

}
