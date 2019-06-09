import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { Route, Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Product } from "src/app/models/Product";
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';
declare let alertify: any;

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.css"],
  providers: [ProductService,CategoryService]
})

export class ProductEditComponent implements OnInit {
  product: Product;
  products:Product[];
  editForm: FormGroup;
  categories:Category[];
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
 
  ngOnInit() {
    this.editForm = this.formBuilder.group({
      ProductID: [],
      CategoryID: ["", Validators.required],
      ProductName: ["", Validators.required],
      Price: ["", Validators.required],
      UnitInStock: ["", Validators.required],
      PriceVat: ["", Validators.required]
    });
     
    this.activatedRoute.params.subscribe(params => {
      this.getProductById(params["id"]);
    });
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  getProductById(id) {
    this.productService.getProductById(id).subscribe(data => {
      this.editForm.setValue(data);
    });
  }
  update() {
    if (this.editForm.valid) {
      this.product = Object.assign({},this.editForm.value);
      this.productService.update(this.product);
      this.productService.getProducts().subscribe(data => {
        this.products = data;
      });
      alertify.success("Ürün Düzenlendi");
      this.router.navigateByUrl("/product");
    }
  }
}
