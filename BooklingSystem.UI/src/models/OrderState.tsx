export interface OrderState {
  totalValue: number;
  price: number;
  tentId: number;
  step: number;
  size: string;
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
