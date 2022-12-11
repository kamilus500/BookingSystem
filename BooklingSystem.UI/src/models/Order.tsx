import Address from "./Address";

export default interface Order {
  id: number;
  userId: number;
  textId: number;
  cost: number;
  dateTime: Date;
  address: Address;
}
