
import {  Component, EventEmitter, Input,  Output, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MenuCategoryService } from 'src/app/Services/menu-category.service';
import { MenuCategory } from 'src/app/interfaces/MenuCategory';


@Component({
  selector: 'app-menu-category-grid',
  templateUrl: './menu-category-grid.component.html',
  styleUrls: ['./menu-category-grid.component.css'],
  
})
export class MenuCategoryGridComponent  {
  @Input()
  menuCategories: MenuCategory[]=[];  
  @Output()
   onEdit=new EventEmitter<MenuCategory>()

   @Output()
   onDelete=new EventEmitter()
 

   menuCategory:MenuCategory | undefined;
   modalRef: BsModalRef |undefined;
   
  constructor(private modalService: BsModalService,private menuCategoryService:MenuCategoryService) { }   

  edit(menuCategory:MenuCategory)
  {
    this.onEdit.emit(menuCategory);
  }
  
  
  openConfirmationModal(template: TemplateRef<any>,menuCategory:MenuCategory) {    
    this.menuCategory=menuCategory; 
    this.modalRef = this.modalService.show(template, { class: 'modal-dialog-centered' });
  }

  confirm() {
      this.menuCategory!.IsDeleted=true;
    this.menuCategoryService.add(this.menuCategory!).subscribe({
      next:()=>{this.onDelete.emit()
      }
    }

    )
    // Perform the action to be executed on confirmation
    this.modalRef?.hide();
  }

  decline() {
    // Perform any action to be executed on cancel or decline
    this.modalRef?.hide();
  }


}
