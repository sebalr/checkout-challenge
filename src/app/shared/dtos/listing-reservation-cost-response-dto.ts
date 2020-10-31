export class ListingReservationCostResponseDto {
  public night_counts: number;
  public nights_cost: number;
  public discount: number;
  public cleaning_fee: number;
  public total: number;

  public constructor() { }

  public init(data: any) {
    this.night_counts = data.night_counts;
    this.nights_cost = data.night_costs;
    this.discount = data.discount;
    this.cleaning_fee = data.cleaning_fee;
    this.total = data.total;
  }
}
