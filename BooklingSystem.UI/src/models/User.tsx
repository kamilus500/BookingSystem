import Order from "./Order";

export default interface User {
  Id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: number;
  orders: Order[];
}
