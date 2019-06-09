import { Component, OnInit } from "@angular/core";
import { Product } from "../models/Product";
import { ProductService } from "../services/product.service";
import { ActivatedRoute } from '@angular/router';
 
declare let alertify: any;

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  constructor(
    private productService: ProductService, 
    private activatedRoute:ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.productService.getProducts().subscribe(data => {
        this.products = data;
      });
    });
  
    this.activatedRoute.params.subscribe(routeParams => {
    });
  }
  products: Product[];
  ngOnInit() {
   
    // location.reload();
  }
  
}
