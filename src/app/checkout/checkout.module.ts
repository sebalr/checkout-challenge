import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from 'src/app/checkout/checkout.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { CheckoutRoutingModule } from 'src/app/checkout/checkout-routing.module';
import { ListingInformationComponent } from './listing-information/listing-information.component';
import { ReservationReviewComponent } from './reservation-review/reservation-review.component';
import { ReservationConfirmationComponent } from './reservation-confirmation/reservation-confirmation.component';



@NgModule({
  declarations: [CheckoutComponent, ListingInformationComponent, ReservationReviewComponent, ReservationConfirmationComponent],
  imports: [
    AngularMaterialModule,
    CheckoutRoutingModule,
    CommonModule
  ]
})
export class CheckoutModule { }
