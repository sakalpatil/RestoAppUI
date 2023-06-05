import { Component, OnInit } from '@angular/core';
import { MenuCategoryService } from 'src/app/Services/menu-category.service';
import { MenuCategory } from 'src/app/interfaces/MenuCategory';

@Component({
  selector: 'app-menu-category-grid',
  templateUrl: './menu-category-grid.component.html',
  styleUrls: ['./menu-category-grid.component.css'],
  providers:[MenuCategoryService]
  
})
export class MenuCategoryGridComponent implements OnInit {

  menuCategories: MenuCategory[]=[] 

  constructor(private menuCategoryService:MenuCategoryService) { }
  
  ngOnInit(): void {
    this.menuCategories= this.menuCategoryService.getMenuCategories();
  }
}
