export class ListingInformationDto {
  public id: string;
  public owner_id: string;
  public slug: string;
  public adults: number;
  public children: number;
  public is_pet_allowed: boolean;
  public base_price: number;
  public cleaning_fee: number;
  public image_url: string;
  public weekly_discount: number;
  public monthly_discount: number;
  public special_prices: Array<SpecialPriceDto>;

  public constructor() { }

  public init(data: any) {
    this.id = data.id;
    this.owner_id = data.owner_id;
    this.slug = data.slug;
    this.adults = data.adults;
    this.children = data.children;
    this.is_pet_allowed = data.is_pet_allowed;
    this.base_price = data.base_price;
    this.cleaning_fee = data.cleaning_fee;
    this.image_url = data.image_url;
    this.weekly_discount = data.weekly_discount;
    this.monthly_discount = data.monthly_discount;
    this.special_prices = data.special_prices;
  }
}

export class SpecialPriceDto {
  public date: Date;
  public base_price: number;

  public constructor() { }

  public init(data: any) {
    this.date = new Date(data.date);
    this.base_price = data.base_price;
  }
}
