import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CategoryService } from "src/app/services/category.service";
import { Category } from "../../models/Category";

@Component({
  selector: "app-category-detail",
  templateUrl: "./category-detail.component.html",
  styleUrls: ["./category-detail.component.css"],
  providers: [CategoryService]
})
export class CategoryDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService
  ) {}
  category: Category;
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
}
