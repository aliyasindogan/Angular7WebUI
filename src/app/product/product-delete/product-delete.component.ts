import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/Product";
import { ProductService } from "src/app/services/product.service";
import { Route, Router,ActivatedRoute } from "@angular/router";

declare let alertify: any;

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
  providers: [ProductService]
})
export class ProductDeleteComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}
  product: Product;
  products: Product[];
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
    deleteProduct(product:Product) {
    this.productService.delete(this.product);
    this.ngOnInit();
    alertify.success("Ürün Silindi");
    this.router.navigate(["product"]);
    };
  }

