export default interface Order {
  id: number;
  userId: number;
  textId: number;
  cost: number;
  dateTime: Date;
  tentId: number;
  adress: string;
  isEnd: boolean;
  isAccepted: boolean;
}
