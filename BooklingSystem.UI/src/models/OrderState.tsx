export interface OrderState {
  totalValue: number;
  price: number;
  tentId: number|null;
  step: number;
  size: string|undefined;
  bbq: boolean;
  speaker: boolean;
  chairs: number;
  tables: number;
  date: Date | null;
  address: {
    street: string;
    buildingNumber: string;
    zipCode: string;
    city: string;
  };
  user: {
    email: string;
    firstName: string;
    lastName: string;
    userId?: number;
  };
}
