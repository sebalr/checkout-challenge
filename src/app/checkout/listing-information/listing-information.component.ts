import { Component, Input, OnInit } from '@angular/core';
import { ListingInformationDto } from 'src/app/shared/dtos/listing-information-dto';

@Component({
  selector: 'slr-listing-information',
  templateUrl: './listing-information.component.html',
  styleUrls: ['./listing-information.component.scss']
})
export class ListingInformationComponent implements OnInit {
  @Input() public listingInformation: ListingInformationDto;

  constructor() { }

  ngOnInit(): void {
  }

}
