import Order from "./Order";

export default interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: number;
  isDeleted: boolean;
  orders: Order[];
}
