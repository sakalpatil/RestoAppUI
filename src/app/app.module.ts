import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableGridComponent } from './Transactions/table-grid/table-grid.component';
import { MenuCategoryComponent } from './Masters/menu-category/menu-category.component';
import { MenuCategoryFormComponent } from './Masters/menu-category/menu-category-form/menu-category-form.component';
import { MenuCategoryGridComponent } from './Masters/menu-category/menu-category-grid/menu-category-grid.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,    
    TableGridComponent,
    MenuCategoryComponent,
    MenuCategoryFormComponent,
    MenuCategoryGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
