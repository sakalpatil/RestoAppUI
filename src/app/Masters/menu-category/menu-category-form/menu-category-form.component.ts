import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuCategoryService } from 'src/app/Services/menu-category.service';
import {MenuCategory} from 'src/app/interfaces/MenuCategory'

@Component({
  selector: 'app-menu-category-form',
  templateUrl: './menu-category-form.component.html',
  styleUrls: ['./menu-category-form.component.css'],
  // providers:[MenuCategoryService]
  
})
export class MenuCategoryFormComponent implements OnInit {

  form:FormGroup= new FormGroup({
    'Name':new FormControl('',Validators.required),
    'Description': new FormControl('')
  })
  
  constructor(private menuCategoryService:MenuCategoryService) { }

  ngOnInit(): void {
  }

  Submit()
  {
    let menuCat:MenuCategory=this.form.value;
    console.log(menuCat);
    this.menuCategoryService.add(menuCat)
  }

}
