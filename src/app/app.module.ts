import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RouterDeclarations } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BillingComponent } from './pages/billing/billing.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductsComponent } from './pages/products/products.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';


import { dirConfig } from './dir.config';

// import { RouterConfig,RouterDeclarations } from './router.config';
import { ProductsModel } from './model/products.model';
import { BillingFormModel } from './model/billingformfields.model';
import { CompanyDetailsModel } from './model/companydetails.model';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartService } from './services/cart.service';

import { StorageService } from './services/storage.service';
import { HttpClientModule } from '@angular/common/http';
import { CalculatorComponent } from './2nd task/calculator/calculator.component';
@NgModule({
  declarations: [
    AppComponent,
    BillingComponent,
    CheckoutComponent,
    ProductsComponent,
    FilterPipe,
    SortPipe,
             dirConfig ,RouterDeclarations,FilterPipe,SortPipe, CalculatorComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule 
  ],
  providers : [ProductsModel,BillingFormModel,CompanyDetailsModel, StorageService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
