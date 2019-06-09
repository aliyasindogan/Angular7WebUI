import { ProductComponent } from "./product/product.component";
import { CategoryComponent } from "./category/category.component"
import {Routes} from "@angular/router";
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryDeleteComponent } from './category/category-delete/category-delete.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { ProjectComponent } from './project/project.component';

export const appRoutes:Routes = [
    { path: "product", component: ProductComponent },
    { path: "productDetail/:id", component: ProductDetailComponent },
    { path: "productEdit/:id", component: ProductEditComponent },
    { path: "productDelete/:id", component: ProductDeleteComponent },
    { path: "productCreate", component: ProductAddComponent },
    { path: "category", component: CategoryComponent },
    { path: "categoryDetail/:id", component: CategoryDetailComponent },
    { path: "categoryEdit/:id", component: CategoryEditComponent },
    { path: "categoryDelete/:id", component: CategoryDeleteComponent },
    { path: "categoryCreate", component: CategoryAddComponent },
    { path: "project", component: ProjectComponent },
    { path: "**", redirectTo:"product", pathMatch:"full"}
];
