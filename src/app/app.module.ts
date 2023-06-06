import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableGridComponent } from './Transactions/table-grid/table-grid.component';
import { MenuCategoryFormComponent } from './Masters/menu-category-form/menu-category-form.component';
import { MenuCategoryGridComponent } from './Masters/menu-category-grid/menu-category-grid.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,    
    TableGridComponent,   
    MenuCategoryFormComponent,
    MenuCategoryGridComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot()    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
