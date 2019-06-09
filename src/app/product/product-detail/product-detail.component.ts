import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/services/product.service";
import { Product } from "../../models/Product";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"],
  providers: [ProductService]
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}
  product: Product;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getProductById(params["id"]);
    });
  }
  getProductById(id) {
    this.productService.getProductById(id).subscribe(data => {
      this.product = data;
    });
  }
}
