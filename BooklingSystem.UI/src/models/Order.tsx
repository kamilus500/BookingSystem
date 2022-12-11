import Address from "./Address";

export default interface Order {
  Address: Address;
  UserId: number;
  TentId: number;
  Cost: number;
  DateTime: Date;
}
