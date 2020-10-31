export class ListingConfirmReservationResponseDto {
  public message: string;

  public constructor() { };

  public init(data: any) {
    this.message = data.message;
  }
}
