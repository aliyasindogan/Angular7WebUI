import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { ProductComponent } from "./product/product.component";
import { ProductDetailComponent } from "./product/product-detail/product-detail.component";
import { ProductAddComponent } from "./product/product-add/product-add.component";
import { ProductEditComponent } from "./product/product-edit/product-edit.component";
import { CategoryComponent } from "./category/category.component";
import { ProductDeleteComponent } from "./product/product-delete/product-delete.component";
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryDeleteComponent } from './category/category-delete/category-delete.component';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      ProductComponent,
      CategoryComponent,
      ProductDetailComponent,
      ProductAddComponent,
      ProductEditComponent,
      ProductDeleteComponent,
      CategoryAddComponent,
      CategoryEditComponent,
      CategoryDeleteComponent,
      CategoryDetailComponent,
      ProjectComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
