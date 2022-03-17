import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductsModel } from "../model/products.model";
import { ProductsComponent } from "../pages/products/products.component";
import { ProductsListDir } from "./productslist.dir";

import { dirConfig } from '../dir.config';
import { By } from '@angular/platform-browser';

describe('ProductsListDir', () => {
    let fixture;
    let component;
    let debug;
    let button1;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ FormsModule, ReactiveFormsModule ],
        declarations: [
            ProductsListDir,
            ProductsComponent,
            dirConfig
        ]
      }).overrideComponent(dirConfig[1], {
  
      }).compileComponents();
      fixture = TestBed.createComponent(dirConfig[1]);
      component = fixture.debugElement.componentInstance;     

    fixture.detectChanges();
    });
  

      it("should display confirmation on subscribe button click", () => {
        component.isAdd = false;    
        let addCartButton = fixture.debugElement.query(By.css("button"));
        addCartButton.triggerEventHandler("click", null);    
        expect(component.isAdd).toBe(false);
      });
  
  
  });