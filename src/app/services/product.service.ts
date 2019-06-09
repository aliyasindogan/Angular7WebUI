import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../models/Product";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}
  path = "http://localhost:58083/api/";

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.path + "products");
  }

  getProductById(id): Observable<Product> {
    return this.httpClient.get<Product>(this.path + "products/detail/" + id);
  }

  add(product) {
    this.httpClient.post(this.path + "products/create", product).subscribe();
  }

  update(product: Product) {
    let id: number = product.ProductID;
    this.httpClient.put(this.path + "products/edit/" + id, product).subscribe();
  }
  delete(product: Product) {
    let id: number = product.ProductID;
    this.httpClient.delete(this.path + "products/delete/" + id).subscribe();
  }
}
