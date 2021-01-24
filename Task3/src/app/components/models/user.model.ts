export interface IUser {
  id: number;
  name: string;
  age: number;
  status: boolean;
  address: {
    city: string;
    street: string;
    number: number;
  };
}
