export interface CarWashBlog {
  id: number;
  name: string;
  description: string;
  image: string;
  date: string; // Consider using Date type if you plan to manipulate dates
  by: string;
  comments: number;
  likes: number;
}
