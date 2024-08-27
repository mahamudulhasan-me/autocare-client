export interface IUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: string;
  createdAt: string; // Alternatively, use Date if you parse the date strings
  updatedAt: string; // Alternatively, use Date if you parse the date strings
  __v: number;
}
