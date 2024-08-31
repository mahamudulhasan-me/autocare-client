import { IService } from "./service";

export interface ISlot {
  _id?: string;
  service: IService;
  date: Date;
  startTime: string;
  endTime: string;
  isBooked: boolean;
  status: "cancelled" | "booked" | "available";
  createdAt?: string; // Alternatively, use Date if you parse the date strings
  updatedAt?: string; // Alternatively, use Date if you parse the date strings
  __v?: number;
}
