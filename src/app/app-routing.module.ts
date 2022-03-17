import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillingComponent } from './pages/billing/billing.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  { path : 'products' , component : ProductsComponent },
  { path : 'billing' , component : BillingComponent },
  { path : 'checkout' , component : CheckoutComponent },
  {
    path : '',
    redirectTo : '/products',
    pathMatch : 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RouterDeclarations = [ ProductsComponent , BillingComponent , CheckoutComponent ];

