import { IUser } from "./user";

export interface ITestimonial {
  _id: string;
  user: IUser;
  description: string;
  rating: number;
  isDeleted: boolean;
}
