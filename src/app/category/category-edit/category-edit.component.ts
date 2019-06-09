import { Component, OnInit } from "@angular/core";
import { CategoryService } from "src/app/services/category.service";
import { Route, Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Category } from "src/app/models/Category";
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
declare let alertify: any;

@Component({
  selector: "app-category-edit",
  templateUrl: "./category-edit.component.html",
  styleUrls: ["./category-edit.component.css"],
  providers: [CategoryService]
})

export class CategoryEditComponent implements OnInit {
  editForm: FormGroup;
  category: Category;
  categories:Category[];
  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
 
  ngOnInit() {
    this.editForm = this.formBuilder.group({
      CategoryID: ["", Validators.required],
      CategoryName: ["", Validators.required],
      IsActive: ["", Validators.required],
      Order: ["", Validators.required],
    });
    this.activatedRoute.params.subscribe(params => {
      this.getCategoryById(params["id"]);
    });
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  getCategoryById(id) {
    this.categoryService.getCategoryById(id).subscribe(data => {
      this.editForm.setValue(data);
    });
  }
  update() {
    if (this.editForm.valid) {
      this.category = Object.assign({},this.editForm.value);
      this.categoryService.update(this.category);
      this.categoryService.getCategories().subscribe(data => {
        this.categories = data;
      });
      alertify.success("Kategori Düzenlendi");
      this.router.navigateByUrl("/category");
    }
  }
}
