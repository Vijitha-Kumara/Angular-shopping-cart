import { Component, OnInit } from '@angular/core';
import { ProductsModel } from 'src/app/model/products.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public cartflag:boolean= false;
  constructor(   
    public cart: CartService,
    public products: ProductsModel

  ){

  }

  ngOnInit(){
    this.ref();
  }
  ref(){
    this.cartflag = false;
    setTimeout( () => {
        this.cartflag = true;
    }, 1000 )
  }

  
}