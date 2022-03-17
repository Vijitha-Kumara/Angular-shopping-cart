import { Component, OnInit } from '@angular/core';
import { ProductsModel } from 'src/app/model/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  searchText: string
  public cartflag:boolean= false;
  public sortBy: string ='';
  public sortOption: string ='product_name|asc';
  productscopy: any;
constructor (
  public products:ProductsModel
  
  ){
this.productscopy = this.products;
}
ngOnInit(){
  this.ref();
}
ref(){
  this.cartflag = false;
  setTimeout( () => {
      this.cartflag = true;
  }, 10 )
}
}