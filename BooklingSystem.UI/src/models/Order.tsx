import Address from "./Address";

export default interface Order {
  id: number;
  userId: number;
  textId: number;
  cost: number;
  dateTime: Date;
  tentId: number;
  address: Address;
  isEnd: boolean;
  isAccepted: boolean;
}
