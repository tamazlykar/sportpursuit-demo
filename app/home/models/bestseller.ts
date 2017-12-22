export interface IBestseller {
  entity_id: string;
  brand: string;
  name: string;
  imageUrl: string;
  prices: {
    id: string;
    current: string;
    old: string;
    specialPrice: number;
    retailPrice: number;
    discount: number;
    _specialPrice: string;
    _retailPrice: string;
  };
}
