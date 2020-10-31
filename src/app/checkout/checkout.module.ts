import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from 'src/app/checkout/checkout.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { CheckoutRoutingModule } from 'src/app/checkout/checkout-routing.module';



@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    AngularMaterialModule,
    CheckoutRoutingModule,
    CommonModule
  ]
})
export class CheckoutModule { }
