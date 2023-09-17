import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { Article } from 'src/app/models/Article';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private _http:HttpClient) { }

  allProducts():Observable<any>{

    return this.http.get( 'https://localhost:44358/api/Article/GetArticles');

  }

  AddProduct(Article:Article ){
    return this._http.post<Article>('https://localhost:44358/api/Article/AjoutArticle',Article);
  }
  deleteArticle(ArticleId:string): Observable<any> {
    return this.http.delete( 'https://localhost:44358/api/Article/DeleteArticle?Id='+ArticleId);
  }
}