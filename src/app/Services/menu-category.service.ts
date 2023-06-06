 import { Injectable } from '@angular/core';
import {MenuCategory} from 'src/app/interfaces/MenuCategory'
import {HttpClient} from '@angular/common/http'
 import {Subject, catchError} from 'rxjs'

@Injectable({
 providedIn: 'root'
})

export class MenuCategoryService {
  private readonly BASE_URL="https://localhost:5001/api/";
   public errorSubject= new Subject<string>()
  constructor(private httpClient:HttpClient) { 
   
  }

  get(pagNumber:number)
  {
    return this.httpClient.get<MenuCategory[]>(`${this.BASE_URL}MenuCategory?Pagesize=10&PageNumber=${pagNumber}`);
    
  }

  add(menuCategory:MenuCategory)
  {
    const message= this.httpClient.post<string>(`${this.BASE_URL}MenuCategory`,menuCategory);  
    return message;    
  }

  
}
