import { IService } from "./service";
import { ISlot } from "./slot";
import { IUser } from "./user";

export interface IBooking {
  _id?: string;
  service: IService;
  slot: ISlot;
  customer: IUser;
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
  createdAt?: string; // Alternatively, use Date if you parse the date strings
  updatedAt?: string; // Alternatively, use Date if you parse the date strings
  __v?: number;
}
