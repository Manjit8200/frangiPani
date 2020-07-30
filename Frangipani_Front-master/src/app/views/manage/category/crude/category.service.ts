import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/cat/categorys';
  private baseUrlstatus = 'http://localhost:8080/springboot-crud-rest/api/cat/categorys/status';

  constructor(private http: HttpClient) { }

  getCategory(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCategory(Category: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, Category);
  }

  updateCategory(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  updateCategoryStatus(id: number ,value: any) {    
    this.http.put(this.baseUrl+"/"+id, value).subscribe(data => {
      console.log(data);
    },
  error => {
    console.log('Log the error here: ', error);
    });    
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCategorysList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
