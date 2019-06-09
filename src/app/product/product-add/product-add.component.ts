import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import {
  FormGroup,
  FormControl,
  Validator,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Product } from "src/app/models/Product";
import { Route, Router } from "@angular/router";
import { Category } from "src/app/models/Category";
import { CategoryService } from "src/app/services/category.service";
declare let alertify: any;

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.css"],
  providers: [ProductService, CategoryService]
})
export class ProductAddComponent implements OnInit {
  // categories = [{'id':1, 'name':'Bilgisayar'}, {'id':2, 'name': 'Elektronik'}, {'id':3, 'name': 'Ev Aleti'}];
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  product: Product;
  products: Product[];
  categories: Category[];
  productAddForm: FormGroup;
  createProductForm() {
    this.productAddForm = this.formBuilder.group({
      ProductName: ["", Validators.required],
      Price: ["", Validators.required],
      UnitInStock: ["", Validators.required],
      PriceVat: ["", Validators.required],
      CategoryID: ["", Validators.required]
    });
  }
  ngOnInit() {
    this.createProductForm();
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  add() {
    if (this.productAddForm.valid) {
      this.product = Object.assign({}, this.productAddForm.value);
      this.productService.add(this.product);
      this.router
        .navigateByUrl("/product", { skipLocationChange: true })
        .then(() => this.router.navigate(["ProductComponent"]));
      this.productService.getProducts().subscribe(data => {
        this.products = data;
      });
      alertify.success("Ürün Eklendi");
      // this.router.navigateByUrl("/product");
    }
  }
}
