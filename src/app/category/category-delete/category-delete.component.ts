import { Component, OnInit } from "@angular/core";
import { Category } from "src/app/models/Category";
import { CategoryService } from "src/app/services/category.service";
import { Route, Router,ActivatedRoute } from "@angular/router";

declare let alertify: any;

@Component({
  selector: "app-category-delete",
  templateUrl: "./category-delete.component.html",
  styleUrls: ["./category-delete.component.css"],
  providers: [CategoryService]
})
export class CategoryDeleteComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService
  ) {}
  category: Category;
  categories: Category[];
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getCategoryById(params["id"]);
    });
  }
  getCategoryById(id) {
    this.categoryService.getCategoryById(id).subscribe(data => {
      this.category = data;
    });
}
    deleteCategory(category:Category) {
    this.categoryService.delete(this.category);
    this.ngOnInit();
    alertify.success("Kategori Silindi");
    this.router.navigate(["category"]);
    };
  }

