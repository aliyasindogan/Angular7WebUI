import { Component, OnInit } from "@angular/core";
import { CategoryService } from "src/app/services/category.service";
import {
  FormGroup,
  FormControl,
  Validator,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Route, Router } from "@angular/router";
import { Category } from "src/app/models/Category";
declare let alertify: any;

@Component({
  selector: "app-category-add",
  templateUrl: "./category-add.component.html",
  styleUrls: ["./category-add.component.css"],
  providers: [CategoryService]
})
export class CategoryAddComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  category: Category;
  categoryAddForm: FormGroup;
  createCategoryForm() {
    this.categoryAddForm = this.formBuilder.group({
      CategoryName: ["", Validators.required],
      Order: ["", Validators.required],
      IsActive: []
    });
  }
  ngOnInit() {
    this.createCategoryForm();
  }

  add() {
    if (this.categoryAddForm.valid) {
      this.category = Object.assign({}, this.categoryAddForm.value);
      this.categoryService.add(this.category);
      // this.router
      //   .navigateByUrl("/category", { skipLocationChange: true })
      //   .then(() => this.router.navigate(["CategoryComponent"]));
      alertify.success("Kategori Eklendi");
    }
  }
}
