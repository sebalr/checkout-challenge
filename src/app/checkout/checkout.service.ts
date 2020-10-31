import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListingApiService } from 'src/app/core/services/listing-api.service';
import { ListingInformationDto } from 'src/app/shared/dtos/listing-information-dto';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private apiService: ListingApiService) { }

  public getListingInformation(uuid: string): Observable<ListingInformationDto> {
    return this.apiService.getListingInformation(uuid);
  }
}
