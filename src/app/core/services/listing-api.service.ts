import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListingInformationDto } from 'src/app/shared/dtos/listing-information-dto';
import { ListingReservationCostRequestDto } from 'src/app/shared/dtos/listing-reservation-cost-request-dto';
import { ListingReservationCostResponseDto } from 'src/app/shared/dtos/listing-reservation-cost-response-dto';
import { ListingConfirmReservationRequestDto } from 'src/app/shared/dtos/listing-confirm-reservation-request-dto';
import { ListingConfirmReservationResponseDto } from 'src/app/shared/dtos/listing-confirm-reservation-response-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListingApiService {

  private readonly apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  public getListingInformation(uuid: string): Observable<ListingInformationDto> {
    return this.http.get<ListingInformationDto>(`${this.apiUrl}/${uuid}/info`);
  }

  public calculateReservationCost(uuid: string, body: ListingReservationCostRequestDto): Observable<ListingReservationCostResponseDto> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<ListingReservationCostResponseDto>(`${this.apiUrl}/${uuid}/reservation-cost`, body, { headers });
  }

  public confirmReservation(uuid: string, body: ListingConfirmReservationRequestDto): Observable<ListingConfirmReservationResponseDto> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<ListingConfirmReservationResponseDto>(`${this.apiUrl}/${uuid}/confirm-reservation`, body, { headers });
  }
}
