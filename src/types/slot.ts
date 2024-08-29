import { IService } from "./service";

export interface ISlot {
  _id?: string;
  service: IService;
  date: Date;
  startTime: string;
  endTime: string;
  isBooked: string;
}
