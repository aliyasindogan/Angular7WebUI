import { Component, OnInit } from "@angular/core";
import { Category } from "../models/Category";
import { CategoryService } from "../services/category.service";
import { ActivatedRoute } from '@angular/router';
 
declare let alertify: any;

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {
  constructor(
    private categoryService: CategoryService, 
    private activatedRoute:ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.categoryService.getCategories().subscribe(data => {
        this.categories = data;
      });
    });
  
    this.activatedRoute.params.subscribe(routeParams => {
    });
  }
  categories: Category[];
  ngOnInit() {
  }
  
}
