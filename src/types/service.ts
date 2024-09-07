export interface IService {
  _id: string;
  name: string;
  categoryId: number;
  description: string;
  coverImage: string;
  price: number;
  duration: number;
  isDeleted: boolean;
}
