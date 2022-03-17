import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { ProductsListDir } from '../../directives/productslist.dir';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { JsonpClientBackend } from '@angular/common/http';
import { ProductsModel } from 'src/app/model/products.model';

// describe('ProductsComponent', () => {
//   let component: ProductsComponent;
//   let fixture: ComponentFixture<ProductsComponent>;
//   let directive: ProductsListDir;
//   let inputEl: DebugElement;
//   let spy: any;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ ProductsComponent ,ProductsListDir],
//       providers: [
//         ProductsListDir
//       ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ProductsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     directive = TestBed.get(ProductsListDir);
//     inputEl = fixture.debugElement.query(By.css('button'));
//   });

//   // it('should create', () => {
//   //   expect(component).toBeTruthy();
//   // });
  
//   // it('should call the addcart method when the button is clicked', () => {
//   //   debugger
//   //   directive = fixture.debugElement.query(By.directive(ProductsListDir)).injector.get(ProductsListDir) as ProductsListDir;
//   //   console.log("direct",directive)
//   //   spy = spyOn(directive, 'addToCart');
//   //   console.log("direct1",spy)
//   //   inputEl.triggerEventHandler('click', null);
//   //   console.log("nothi",inputEl)
//   //   fixture.detectChanges();
//   //   expect(directive.addToCart).toHaveBeenCalled();
//   // });
//   // it('should click Send button with async', async(() => {
//   //   let buttonElement = fixture.debugElement.query(By.css('.send-button'));
    
//   //   spyOn(directive, 'addToCart');
//   //   //Trigger click event after spyOn
//   //   buttonElement.triggerEventHandler('click', null);

//   //   fixture.whenStable().then(() => {
//   //     expect(directive.addToCart).toHaveBeenCalled();
//   //   });
//   // }));  
// });
 describe('Directive: ProductsListDir', () => {
     let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let button1: DebugElement;
  beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ ProductsComponent ,ProductsListDir],
          providers: [
            ProductsListDir,ProductsModel
          ]
        })

}));
// it("should ref fun", () => {
//   component.cartflag = false;    
//   let CartButton = fixture.debugElement.query(By.css("button"));
//   CartButton.triggerEventHandler("click", null);

//   expect(component.cartflag).toBe(true);
// });

 });
