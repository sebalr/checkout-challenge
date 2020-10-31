export class ListingReservationCostRequestDto {
  public checkin: Date;
  public checkout: Date;
  public adults: number;
  public children: number;
  public pets: boolean;

  public constructor() { };

  public init(data: any) {
    this.checkin = new Date(data.checkin);
    this.checkout = new Date(data.checkout);
    this.adults = data.adults;
    this.children = data.children;
    this.pets = data.pets;
  }
}
