import { Component } from '@angular/core';
import { MenuCategoryService } from './Services/menu-category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  providers:[MenuCategoryService]
})
export class AppComponent {
  title = 'RestoAppUI';
}
