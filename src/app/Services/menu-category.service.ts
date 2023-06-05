// import { Injectable } from '@angular/core';
import {MenuCategory} from 'src/app/interfaces/MenuCategory'

// @Injectable({
//   providedIn: 'root'
// })
export class MenuCategoryService {

  menuCategories:MenuCategory[]=[];
  constructor() { 
    this.menuCategories=[
      {
        
        "Name": "Appetizers",
        "Description": "Delicious starters to tantalize your taste buds"
    
      },
      {
     
        "Name": "Main Course",
        "Description": "Heartwarming dishes to satisfy your hunger"
       
      },
      {
        
        "Name": "Desserts",
        "Description": "Sweet treats to indulge your sweet tooth"
      }
    ]
  }

  get()
  {
    return this.menuCategories;
  }

  add(menuCategory:MenuCategory)
  {
    //just for checking the delay
    setTimeout(()=>{
      this.menuCategories.push(menuCategory);
    },4000)
    
  }

  
}
