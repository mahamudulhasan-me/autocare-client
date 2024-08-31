export type TUserRole = "admin" | "user";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: TUserRole;
  createdAt: string; // Alternatively, use Date if you parse the date strings
  updatedAt: string; // Alternatively, use Date if you parse the date strings
  __v: number;
}
