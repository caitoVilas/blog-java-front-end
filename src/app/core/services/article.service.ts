import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articleURL = 'http://localhost:8080/api/public/article/'

  constructor(
    private http: HttpClient
  ) { }

  getNews(): Observable<Article[]> {

    return this.http.get<Article[]>(this.articleURL  + 'ver');
  }

  getArticles(page: number, size: number, order: string, asc: boolean): Observable<any> {

    return this.http.get<any>(this.articleURL + 'view?' + `page=${page}&size=${size}&order=${order}&asc=${asc}`);
  }

  getArticle(id: number): Observable<Article> {

    return this.http.get<Article>(this.articleURL + 'detalle/' + id);
  }
}
