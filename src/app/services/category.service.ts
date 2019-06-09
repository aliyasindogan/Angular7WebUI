import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Category } from "../models/Category";

@Injectable({
  providedIn: "root"
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}
  path = "http://localhost:58083/api/";

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.path + "categories");
  }

  getCategoryById(id): Observable<Category> {
    return this.httpClient.get<Category>(this.path + "categories/detail/" + id);
  }

  add(category) {
    this.httpClient.post(this.path + "categories/create", category).subscribe();
  }

  update(category: Category) {
    let id: number = category.CategoryID;
    this.httpClient.put(this.path + "categories/edit/" + id, category).subscribe();
  }
  
  delete(category: Category) {
    let id: number = category.CategoryID;
    this.httpClient.delete(this.path + "categories/delete/" + id).subscribe();
  }
}
