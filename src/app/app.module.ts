import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarMenuComponent } from './common/sidebar-menu/sidebar-menu.component';
import { TableGridComponent } from './transactions/table-grid/table-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    TableGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
