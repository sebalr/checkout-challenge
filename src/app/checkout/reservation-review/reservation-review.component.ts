import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CheckoutService } from 'src/app/checkout/checkout.service';
import { ListingInformationDto } from 'src/app/shared/dtos/listing-information-dto';

@Component({
  selector: 'slr-reservation-review',
  templateUrl: './reservation-review.component.html',
  styleUrls: ['./reservation-review.component.scss']
})
export class ReservationReviewComponent implements OnInit {

  public listingInformation$: Observable<ListingInformationDto>;

  constructor(private route: ActivatedRoute, private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.listingInformation$ = this.route.params.pipe(
      switchMap(params => this.checkoutService.getListingInformation(params.listingUuid))
    );
  }

}
